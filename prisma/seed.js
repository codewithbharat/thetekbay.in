"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var users, categories, adminUser, allCategories, postsData, posts;
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    console.log('Start seeding users, categories, and posts...');
                    return [4 /*yield*/, prisma.user.createMany({
                            data: [
                                { name: 'Admin User', email: 'admin@example.com', password: 'securePassword123', role: client_1.Role.ADMIN },
                                { name: 'Editor User', email: 'editor@example.com', password: 'editorPass456', role: client_1.Role.EDITOR },
                                { name: 'General User', email: 'user@example.com', password: 'userPass789', role: client_1.Role.USER },
                            ],
                            skipDuplicates: true,
                        })];
                case 1:
                    users = _f.sent();
                    console.log("".concat(users.count, " users seeded."));
                    return [4 /*yield*/, prisma.category.createMany({
                            data: [
                                { name: 'Technology' },
                                { name: 'Health' },
                                { name: 'Science' },
                                { name: 'Lifestyle' },
                                { name: 'Business' },
                            ],
                            skipDuplicates: true,
                        })];
                case 2:
                    categories = _f.sent();
                    console.log("".concat(categories.count, " categories seeded."));
                    return [4 /*yield*/, prisma.user.findUnique({ where: { email: 'admin@example.com' } })];
                case 3:
                    adminUser = _f.sent();
                    return [4 /*yield*/, prisma.category.findMany()];
                case 4:
                    allCategories = _f.sent();
                    if (!adminUser || allCategories.length === 0) {
                        console.log('User or Categories not found. Ensure they are seeded correctly.');
                        return [2 /*return*/];
                    }
                    postsData = [
                        {
                            title: 'The Rise of Quantum Computing',
                            content: 'Quantum computing is set to revolutionize data processing by leveraging quantum mechanics.',
                            published: true,
                            imageUrl: 'https://example.com/quantum.jpg',
                            categoryId: (_a = allCategories.find(function (c) { return c.name === 'Technology'; })) === null || _a === void 0 ? void 0 : _a.id,
                        },
                        {
                            title: 'Health Benefits of a Plant-Based Diet',
                            content: 'Studies show that plant-based diets can reduce the risk of chronic diseases.',
                            published: true,
                            imageUrl: 'https://example.com/plant-based.jpg',
                            categoryId: (_b = allCategories.find(function (c) { return c.name === 'Health'; })) === null || _b === void 0 ? void 0 : _b.id,
                        },
                        {
                            title: 'Mars Mission 2024: Preparing for the Red Planet',
                            content: 'NASA’s upcoming Mars mission aims to establish a human presence on Mars.',
                            published: true,
                            imageUrl: 'https://example.com/mars-mission.jpg',
                            categoryId: (_c = allCategories.find(function (c) { return c.name === 'Science'; })) === null || _c === void 0 ? void 0 : _c.id,
                        },
                        {
                            title: 'Digital Detox: A Growing Trend',
                            content: 'People are increasingly taking breaks from digital devices for mental well-being.',
                            published: false,
                            imageUrl: 'https://example.com/digital-detox.jpg',
                            categoryId: (_d = allCategories.find(function (c) { return c.name === 'Lifestyle'; })) === null || _d === void 0 ? void 0 : _d.id,
                        },
                        {
                            title: 'The Role of Cryptocurrencies in Future Finance',
                            content: 'Cryptocurrencies are gaining mainstream acceptance as a valid financial instrument.',
                            published: true,
                            imageUrl: 'https://example.com/crypto-future.jpg',
                            categoryId: (_e = allCategories.find(function (c) { return c.name === 'Business'; })) === null || _e === void 0 ? void 0 : _e.id,
                        },
                        // Add more posts as needed
                    ].map(function (post) { return (__assign(__assign(__assign(__assign({}, post), { slug: post.title.toLowerCase().replace(/ /g, '-') }), post), { authorId: adminUser.id })); });
                    return [4 /*yield*/, prisma.post.createMany({
                            data: postsData,
                        })];
                case 5:
                    posts = _f.sent();
                    console.log("".concat(posts.count, " posts seeded."));
                    console.log('Seeding finished.');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
