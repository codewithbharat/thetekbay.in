import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Resetting database and seeding data...');

  // Delete all data (in the correct order to avoid foreign key constraint issues)
  await prisma.post.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  console.log('Existing data cleared.');

  // Seed Users
  await prisma.user.createMany({
    data: [
      { name: 'Admin User', email: 'admin@example.com', password: 'securePassword123', role: Role.ADMIN },
      { name: 'Editor User', email: 'editor@example.com', password: 'editorPass456', role: Role.EDITOR },
      { name: 'General User', email: 'user@example.com', password: 'userPass789', role: Role.USER },
    ],
  });

  console.log('Users seeded.');

  // Seed Categories
  const categories = await prisma.category.createMany({
    data: [
      { name: 'Technology' },
      { name: 'Health' },
      { name: 'Science' },
      { name: 'Lifestyle' },
      { name: 'Business' },
    ],
  });

  console.log('Categories seeded.');

  // Fetch Admin User and Categories
  const adminUser = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  const allCategories = await prisma.category.findMany();

  if (!adminUser || allCategories.length === 0) {
    console.log('User or Categories not found. Ensure they are seeded correctly.');
    return;
  }

  // Seed Posts
  const postsData = [
    {
      "title": "The Rise of Quantum Computing",
      "content": "Quantum computing is set to revolutionize data processing by leveraging the principles of quantum mechanics. Unlike traditional computers that use bits (0s and 1s), quantum computers utilize quantum bits or qubits, enabling parallel computation and solving problems that are currently intractable. Industries like pharmaceuticals, finance, and artificial intelligence stand to benefit the most from advancements in this field. However, challenges like error correction and hardware scalability still need to be addressed. Quantum computing has the potential to tackle some of the most complex problems, such as optimizing supply chains, modeling molecular structures for drug development, and even breaking current encryption methods.",
      "published": true,
      "imageUrl": "https://example.com/quantum.jpg",
      "category": "Technology"
    },
    {
      "title": "Health Benefits of a Plant-Based Diet",
      "content": "Studies show that adopting a plant-based diet can significantly reduce the risk of chronic diseases like diabetes, heart disease, and certain types of cancer. By focusing on fruits, vegetables, whole grains, and legumes, individuals can improve gut health, enhance their immune systems, and contribute to environmental sustainability. Additionally, plant-based diets are linked to lower cholesterol levels and improved mental well-being, making it a holistic approach to health. The environmental impact of plant-based diets is also substantial, as reducing animal-based food production helps in lowering greenhouse gas emissions and conserving water.",
      "published": true,
      "imageUrl": "https://example.com/plant-based.jpg",
      "category": "Health"
    },
    {
      "title": "Mars Mission 2024: Preparing for the Red Planet",
      "content": "NASA’s upcoming Mars mission, set for 2024, aims to establish a human presence on the Red Planet. The mission will involve the deployment of advanced robotics, sustainable habitats, and scientific equipment to study the Martian environment. Key objectives include testing new propulsion technologies, gathering data for future colonization, and searching for signs of ancient microbial life. The mission is a critical step toward making Mars a second home for humanity. Successful implementation could lead to the establishment of the first human colony on Mars, opening new possibilities for interplanetary exploration and resource utilization.",
      "published": true,
      "imageUrl": "https://example.com/mars-mission.jpg",
      "category": "Science"
    },
    {
      "title": "Digital Detox: A Growing Trend",
      "content": "As the world becomes increasingly digital, more people are opting for digital detoxes to regain mental balance and productivity. A digital detox involves unplugging from electronic devices, including smartphones, laptops, and social media platforms, for a specific period. Research suggests that taking breaks from digital devices can reduce stress, improve sleep quality, and enhance interpersonal relationships. Many wellness retreats now offer digital detox programs tailored to help individuals reconnect with nature and themselves. By disconnecting, people can improve their focus, creativity, and overall mental health. For individuals in high-stress jobs or those overwhelmed by constant notifications, a digital detox is becoming an essential practice for mental well-being.",
      "published": false,
      "imageUrl": "https://example.com/digital-detox.jpg",
      "category": "Lifestyle"
    },
    {
      "title": "The Role of Cryptocurrencies in Future Finance",
      "content": "Cryptocurrencies like Bitcoin and Ethereum are gaining mainstream acceptance as valid financial instruments. Governments and financial institutions worldwide are exploring the potential of blockchain technology to create decentralized and transparent systems. Central Bank Digital Currencies (CBDCs) are also being piloted to offer a regulated alternative to cryptocurrencies. While challenges like volatility and regulatory uncertainty remain, the growing adoption of crypto is reshaping global finance and enabling borderless transactions. In the coming years, we may see cryptocurrencies integrated more deeply into everyday financial transactions, from remittances to online shopping, fundamentally transforming how we manage and transfer value.",
      "published": true,
      "imageUrl": "https://example.com/crypto-future.jpg",
      "category": "Business"
    },
    {
      "title": "Artificial Intelligence in Education: Transforming Learning",
      "content": "Artificial Intelligence (AI) is revolutionizing education by personalizing learning experiences for students. AI-powered platforms can analyze individual learning patterns, recommend tailored study materials, and even predict areas where students may struggle. From virtual tutors to automated grading systems, AI is making education more accessible and efficient. AI can also provide real-time feedback to students, fostering continuous improvement and enhancing teacher-student interaction. However, concerns about data privacy, algorithm bias, and equitable access to AI-powered education remain critical challenges that educators and policymakers need to address. The future of education is likely to see AI not just as a tool, but as an integral part of the learning ecosystem.",
      "published": true,
      "imageUrl": "https://example.com/ai-education.jpg",
      "category": "Technology"
    },
    {
      "title": "Climate Change: Urgent Call for Action",
      "content": "Climate change is one of the most pressing issues of our time, with rising global temperatures, melting ice caps, and extreme weather events becoming more frequent. Scientists warn that if greenhouse gas emissions are not curbed, the planet may face irreversible damage. Governments, corporations, and individuals are being urged to adopt sustainable practices, including transitioning to renewable energy, reducing waste, and protecting natural ecosystems. The fight against climate change requires collective effort on a global scale, with international cooperation being key to achieving ambitious climate goals. If we do not act now, future generations could face dire consequences such as severe food and water shortages, displacement due to rising sea levels, and the collapse of biodiversity.",
      "published": true,
      "imageUrl": "https://example.com/climate-change.jpg",
      "category": "Environment"
    },
    {
      "title": "The Psychology of Remote Work: Benefits and Challenges",
      "content": "Remote work has become the new normal, offering flexibility and improved work-life balance for many employees. However, it also presents challenges such as social isolation, difficulty in maintaining productivity, and blurred boundaries between work and personal life. Employers are now focusing on creating virtual team-building activities and providing mental health support to address these issues. As hybrid models gain popularity, striking a balance between remote and in-office work is essential for long-term success. Mental health initiatives, proper communication channels, and setting clear work-life boundaries are crucial elements in fostering a productive and healthy remote work culture.",
      "published": true,
      "imageUrl": "https://example.com/remote-work.jpg",
      "category": "Lifestyle"
    },
    {
      "title": "The Future of Renewable Energy: Innovations and Challenges",
      "content": "The renewable energy sector is witnessing groundbreaking innovations, from advanced solar panels to offshore wind farms and next-generation batteries for energy storage. These technologies are making clean energy more affordable and efficient. Despite this progress, challenges like supply chain disruptions, high initial costs, and land-use conflicts persist. Governments are investing heavily in renewable energy projects, aiming to achieve net-zero carbon emissions in the coming decades. The transition to renewable energy is essential not only for reducing reliance on fossil fuels but also for ensuring energy security and mitigating the effects of climate change.",
      "published": true,
      "imageUrl": "https://example.com/renewable-energy.jpg",
      "category": "Environment"
    },
    {
      "title": "5G Technology: Revolutionizing Connectivity",
      "content": "5G technology promises to revolutionize connectivity by offering faster speeds, lower latency, and the ability to connect billions of devices seamlessly. This new era of connectivity is expected to drive advancements in autonomous vehicles, smart cities, and telemedicine. However, the rollout of 5G networks faces hurdles like high infrastructure costs and geopolitical tensions over technology standards. Once fully implemented, 5G will transform how we live, work, and interact. The ultra-fast speeds of 5G will make remote work, virtual reality, and AI-powered systems more efficient, opening up new opportunities for industries and everyday life.",
      "published": true,
      "imageUrl": "https://example.com/5g.jpg",
      "category": "Technology"
    },
    {
      "title": "Exploring the Quantum Internet: The Future of Communication",
      "content": "The quantum internet, powered by quantum entanglement and superposition, is expected to revolutionize communication. Unlike the classical internet, which relies on electrical signals, the quantum internet will leverage quantum bits (qubits) to create highly secure communication channels. Quantum key distribution (QKD) will enable encryption that is theoretically unbreakable, making it ideal for applications in national security, finance, and personal privacy. Although quantum networks are still in their infancy, significant progress is being made, and within the next decade, we may see the first practical quantum internet systems emerge.",
      "published": true,
      "imageUrl": "https://example.com/quantum-internet.jpg",
      "category": "Technology"
    },
    {
      "title": "The Role of Artificial Intelligence in Healthcare",
      "content": "Artificial Intelligence is making significant strides in healthcare, from diagnostics to treatment planning and patient care. AI algorithms are now capable of analyzing medical images, identifying patterns that may be overlooked by human doctors, and even predicting disease outbreaks. Machine learning models are also being developed to personalize treatment plans based on an individual’s genetic makeup and lifestyle. As AI continues to evolve, it promises to reduce medical errors, lower healthcare costs, and increase accessibility, particularly in underserved areas.",
      "published": true,
      "imageUrl": "https://example.com/ai-healthcare.jpg",
      "category": "Technology"
    },
    {
      "title": "Robotic Process Automation: Transforming Business Operations",
      "content": "Robotic Process Automation (RPA) is reshaping business operations by automating repetitive tasks traditionally performed by humans. From data entry to processing transactions, RPA can handle high-volume, low-complexity tasks with greater speed and accuracy. This automation allows employees to focus on more strategic tasks, increasing productivity and reducing costs. Companies across various industries, including banking, healthcare, and manufacturing, are embracing RPA to streamline their workflows and improve operational efficiency.",
      "published": true,
      "imageUrl": "https://example.com/rpa-business.jpg",
      "category": "Technology"
    },
    {
      "title": "Blockchain Beyond Cryptocurrency: The Future of Secure Transactions",
      "content": "Blockchain technology, the backbone of cryptocurrencies like Bitcoin and Ethereum, is gaining widespread adoption beyond the realm of digital currencies. Industries such as supply chain management, healthcare, and real estate are exploring the use of blockchain for its ability to create transparent, secure, and immutable records. By eliminating intermediaries and ensuring data integrity, blockchain could reduce fraud, speed up transactions, and lower costs in various sectors. The growing interest in decentralized finance (DeFi) is also a testament to blockchain's potential to revolutionize traditional finance.",
      "published": true,
      "imageUrl": "https://example.com/blockchain.jpg",
      "category": "Technology"
    },
    
    {
      "title": "The Impact of Plant-Based Diets on Gut Health",
      "content": "A growing body of research shows that plant-based diets have a positive impact on gut health by promoting the growth of beneficial gut bacteria. Foods such as fiber-rich vegetables, legumes, and whole grains nourish the gut microbiome, leading to improved digestion and stronger immune function. Additionally, plant-based diets can reduce the risk of gastrointestinal diseases such as irritable bowel syndrome (IBS) and inflammatory bowel disease (IBD). As awareness of gut health increases, more people are adopting plant-based diets to enhance their overall well-being.",
      "published": true,
      "imageUrl": "https://example.com/plant-based-gut-health.jpg",
      "category": "Health"
    },
    {
      "title": "Superfoods: Nature’s Nutrient Powerhouses",
      "content": "Superfoods, including kale, quinoa, chia seeds, and acai berries, are packed with essential vitamins, minerals, and antioxidants that promote optimal health. These nutrient-dense foods are believed to enhance immune function, reduce inflammation, and fight oxidative stress. Consuming a variety of superfoods as part of a balanced diet may help prevent chronic conditions like heart disease, diabetes, and cancer. While they’re not a cure-all, incorporating superfoods into daily meals can provide a boost to overall health.",
      "published": true,
      "imageUrl": "https://example.com/superfoods.jpg",
      "category": "Health"
    },
    {
      "title": "Mental Health Benefits of a Plant-Based Diet",
      "content": "Beyond physical health, plant-based diets also offer mental health benefits. Studies have shown that diets rich in fruits, vegetables, and whole grains can improve mood and reduce symptoms of depression and anxiety. These foods are high in nutrients such as magnesium, omega-3 fatty acids, and antioxidants, which play key roles in brain health. In particular, plant-based diets have been associated with better mental clarity, improved focus, and lower stress levels. As awareness grows, many people are turning to plant-based eating as a holistic approach to both body and mind.",
      "published": true,
      "imageUrl": "https://example.com/mental-health-plant-based.jpg",
      "category": "Health"
    },
    {
      "title": "The Rise of Functional Foods: Enhancing Nutrition and Wellness",
      "content": "Functional foods are those that provide health benefits beyond basic nutrition. These foods are often enriched with additional nutrients such as probiotics, fiber, and omega-3 fatty acids, or they may be naturally rich in compounds like polyphenols and antioxidants. Consuming functional foods like fortified yogurt, kombucha, or nutrient-enhanced snacks can help improve digestive health, boost immunity, and reduce the risk of chronic diseases. With increasing awareness of the role nutrition plays in wellness, functional foods are becoming a key part of many people’s diets.",
      "published": true,
      "imageUrl": "https://example.com/functional-foods.jpg",
      "category": "Health"
    },
    
    {
      "title": "Exploring the Possibilities of Life on Mars",
      "content": "The idea of humans living on Mars has been a dream for decades, but recent technological advancements have made it more possible than ever. NASA's plans for Mars exploration include establishing sustainable habitats that can support human life for extended periods. These habitats will need to provide food, water, and oxygen, while also protecting against radiation and extreme temperatures. The development of advanced life support systems and in-situ resource utilization (ISRU) technologies will be crucial in making life on Mars feasible. While colonization is still years away, the future of space exploration looks promising.",
      "published": true,
      "imageUrl": "https://example.com/mars-life.jpg",
      "category": "Science"
    },
    {
      "title": "The Search for Extraterrestrial Life: New Frontiers in Space Exploration",
      "content": "Astronomers are now closer than ever to answering one of humanity’s oldest questions: Are we alone in the universe? With the discovery of exoplanets in the habitable zone of distant stars, scientists are excited about the possibility of finding alien life. The James Webb Space Telescope is expected to provide detailed information about these distant planets, including their atmospheres, which may reveal signs of biological activity. Research into extremophiles—organisms that thrive in extreme conditions on Earth—also supports the idea that life may exist in environments previously thought to be inhospitable.",
      "published": true,
      "imageUrl": "https://example.com/extraterrestrial-life.jpg",
      "category": "Science"
    },
    {
      "title": "Space Tourism: The Next Big Frontier",
      "content": "Space tourism is rapidly becoming a reality, with private companies like SpaceX, Blue Origin, and Virgin Galactic leading the charge to make space accessible to civilians. These companies are developing spacecraft capable of taking people on suborbital flights to experience weightlessness and see Earth from space. While the industry is still in its early stages, the promise of space tourism has sparked a wave of excitement, offering a new way for people to explore the final frontier. As technology advances, space tourism could become a booming industry, attracting those eager to experience the thrill of space travel.",
      "published": true,
      "imageUrl": "https://example.com/space-tourism.jpg",
      "category": "Science"
    },
    {
      "title": "The Search for Dark Matter: Unveiling the Universe’s Mysteries",
      "content": "Dark matter, which makes up around 27% of the universe, remains one of the greatest mysteries in modern physics. Scientists believe that dark matter interacts with regular matter through gravity but does not emit or absorb light, making it invisible to current telescopes. Ongoing experiments like the Large Hadron Collider and deep underground detectors are working to uncover the nature of dark matter, which could fundamentally alter our understanding of the universe. If researchers succeed in detecting dark matter, it will open up new areas of research in both physics and astronomy.",
      "published": true,
      "imageUrl": "https://example.com/dark-matter.jpg",
      "category": "Science"
    },
  ]
  

  for (const postData of postsData) {
    const category = allCategories.find((c) => c.name === postData.category);

    if (!category) {
      console.log(`Category "${postData.category}" not found. Skipping post "${postData.title}".`);
      continue;
    }

    // Generate a slug
    const slug = postData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');

    // Create the post
    await prisma.post.create({
      data: {
        title: postData.title,
        slug,
        content: postData.content,
        published: postData.published,
        imageUrl: postData.imageUrl,
        authorId: adminUser.id,
        categoryId: category.id,
      },
    });

    console.log(`Post "${postData.title}" seeded.`);
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
