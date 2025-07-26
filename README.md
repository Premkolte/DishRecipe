# 🍳 DishRecipe - Your Ultimate Culinary Companion

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</div>

<p align="center">
  <strong>A modern, feature-rich recipe management application built with React 19</strong>
</p>

<div align="center">
  <p>✨ Create • 📖 Discover • ❤️ Save • 🔄 Share</p>
</div>

---

## 🌟 What Makes DishRecipe Special?

DishRecipe is not just another recipe app—it's a complete culinary ecosystem designed for food enthusiasts, home cooks, and professional chefs alike. With its sleek dark theme, intuitive interface, and powerful features, it transforms the way you interact with recipes.

### 🎯 Key Highlights

- **🎨 Modern UI/UX**: Professional dark theme with gradient accents and smooth animations
- **⚡ Lightning Fast**: Built with Vite for instant hot reloads and optimal performance
- **📱 Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- **💾 Persistent Storage**: All data saved locally with smart synchronization
- **🔍 Smart Search**: Find recipes instantly with our intelligent search system
- **❤️ Favorites System**: Save and organize your beloved recipes

---

## 🚀 Features That Wow

### 🏠 **Homepage Experience**
- **Glitch Text Animation**: Eye-catching brand display with custom CSS animations
- **Hero Section**: Compelling call-to-action with gradient backgrounds
- **Feature Showcase**: Highlight key app capabilities
- **Smooth Navigation**: Intuitive routing with React Router DOM 7

### 📝 **Recipe Management**
- **Create Recipes**: Rich form with validation using React Hook Form
- **Edit Mode**: Inline editing with real-time preview
- **Delete Functionality**: Safe deletion with confirmation dialogs
- **Category System**: Organize recipes by meal type (Breakfast, Lunch, Dinner, Snacks)
- **Image Support**: Visual recipe cards with image URL integration

### ❤️ **Favorites System**
- **One-Click Saving**: Heart icon toggle for instant favorites
- **Dedicated Page**: Browse all saved recipes in one place
- **Cross-Component Sync**: Real-time updates across all pages
- **Persistent Storage**: Favorites saved across sessions

### 🎨 **Visual Excellence**
- **Professional Cards**: Elegant recipe display with hover effects
- **Gradient Themes**: Beautiful color schemes throughout
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Loading States**: Smooth transitions and feedback

---

## 🛠 Tech Stack Deep Dive

### **Frontend Core**
- **React 19.1.0**: Latest React with concurrent features and improved hooks
- **React Router DOM 7.7.0**: Advanced routing with nested routes and lazy loading
- **Vite 7.0.4**: Next-generation build tool for lightning-fast development

### **Styling & UI**
- **Tailwind CSS 4.1.11**: Utility-first CSS framework with custom configurations
- **Custom Animations**: CSS-in-JS animations for glitch effects and transitions
- **Responsive Design**: Mobile-first approach with breakpoint optimization

### **State Management**
- **React Context API**: Global state management for recipes and favorites
- **localStorage Integration**: Client-side persistence without external databases
- **Custom Hooks**: Reusable logic for data management

### **Form Handling**
- **React Hook Form 7.60.0**: Performant forms with minimal re-renders
- **Validation**: Real-time form validation with error handling
- **Toast Notifications**: User feedback with React Toastify 11.0.5

### **Development Tools**
- **ESLint 9.30.1**: Code quality and consistency enforcement
- **TypeScript Support**: Type definitions for enhanced development experience
- **Hot Module Replacement**: Instant updates during development

---

## 📁 Project Architecture

```
DishRecipe/
├── 📁 public/
│   └── vite.svg
├── 📁 src/
│   ├── 📄 App.jsx                 # Main app layout with conditional rendering
│   ├── 📄 main.jsx                # App entry point with providers
│   ├── 📁 Components/
│   │   ├── 🎭 GlitchText.jsx      # Animated brand text component
│   │   ├── 🧭 Navbar.jsx          # Navigation with responsive design
│   │   ├── 🃏 RecipeCard.jsx      # Recipe display cards
│   │   └── ⌨️ TextType.jsx        # Text animation utilities
│   ├── 📁 Context/
│   │   └── 🌐 RecipeContext.jsx   # Global state management
│   ├── 📁 pages/
│   │   ├── 🏠 Home.jsx            # Landing page with hero section
│   │   ├── 📖 Recipes.jsx         # Recipe listing and grid
│   │   ├── ➕ Create.jsx          # Recipe creation form
│   │   ├── 📄 SingleRecipe.jsx    # Individual recipe view/edit
│   │   ├── ❤️ Favorites.jsx       # Saved recipes collection
│   │   └── ℹ️ About.jsx           # App information page
│   ├── 📁 routes/
│   │   └── 🛣️ Mainroutes.jsx      # Route definitions
│   └── 📁 Utils/                  # Utility functions
├── 📄 package.json               # Dependencies and scripts
├── 📄 vite.config.js             # Vite configuration
├── 📄 tailwind.config.js         # Tailwind customization
└── 📄 eslint.config.js           # ESLint rules
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: Version 16 or higher
- **npm**: Version 7 or higher (or yarn/pnpm)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Premkolte/DishRecipe.git
   cd DishRecipe
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open Your Browser**
   ```
   http://localhost:5173
   ```

### Build for Production
```bash
npm run build
npm run preview
```

---

## 📱 Usage Guide

### **Creating Your First Recipe**
1. Navigate to the **Create Recipe** page
2. Fill in recipe details (title, description, ingredients, instructions)
3. Add an image URL for visual appeal
4. Select a category
5. Click "Create Recipe" to save

### **Managing Recipes**
- **View**: Click on any recipe card to see full details
- **Edit**: Use the "Edit Recipe" button for inline editing
- **Delete**: Remove recipes with confirmation dialog
- **Favorite**: Click the heart icon to save to favorites

### **Organizing Collections**
- Browse all recipes in the **Recipes** section
- Access saved recipes in **Favorites**
- Use categories to filter and organize

---

## 🔮 Future Roadmap

### **Phase 1: Enhanced Features** (Q2 2025)
- [ ] **Advanced Search**: Filter by ingredients, cooking time, difficulty
- [ ] **Recipe Ratings**: 5-star rating system with reviews
- [ ] **Cooking Timer**: Built-in timer for recipe steps
- [ ] **Shopping List**: Auto-generate lists from ingredients
- [ ] **Print Mode**: Printer-friendly recipe layouts

### **Phase 2: Social Features** (Q3 2025)
- [ ] **User Profiles**: Personal recipe collections
- [ ] **Recipe Sharing**: Share recipes via links or social media
- [ ] **Community Feed**: Discover trending recipes
- [ ] **Recipe Comments**: Community feedback and tips
- [ ] **Following System**: Follow favorite recipe creators

### **Phase 3: Advanced Functionality** (Q4 2025)
- [ ] **AI Recipe Generator**: Generate recipes from available ingredients
- [ ] **Nutritional Analysis**: Calorie and nutrition tracking
- [ ] **Meal Planning**: Weekly meal planning with recipes
- [ ] **Grocery Integration**: Connect with grocery delivery services
- [ ] **Voice Commands**: Voice-controlled recipe reading

### **Phase 4: Platform Expansion** (2026)
- [ ] **Mobile App**: React Native iOS/Android apps
- [ ] **Desktop App**: Electron-based desktop application
- [ ] **Backend Integration**: User accounts and cloud sync
- [ ] **Recipe Import**: Import from popular recipe websites
- [ ] **Offline Mode**: Full functionality without internet

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **Ways to Contribute**
- 🐛 **Bug Reports**: Found a bug? Let us know!
- 💡 **Feature Requests**: Have ideas? We'd love to hear them!
- 🔧 **Code Contributions**: Submit pull requests
- 📖 **Documentation**: Help improve our docs
- 🎨 **Design**: Suggest UI/UX improvements

### **Development Setup**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit: `git commit -m 'Add amazing feature'`
5. Push: `git push origin feature/amazing-feature`
6. Open a Pull Request

---

## 📊 Project Stats

<div align="center">
  <img src="https://img.shields.io/github/stars/Premkolte/DishRecipe?style=social" alt="GitHub stars" />
  <img src="https://img.shields.io/github/forks/Premkolte/DishRecipe?style=social" alt="GitHub forks" />
  <img src="https://img.shields.io/github/watchers/Premkolte/DishRecipe?style=social" alt="GitHub watchers" />
</div>

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

- **Modern React Development**: Hooks, Context API, and React 19 features
- **State Management**: Complex state handling across components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Form Handling**: Advanced form validation and submission
- **Local Storage**: Client-side data persistence
- **Routing**: Single-page application navigation
- **Performance Optimization**: Code splitting and lazy loading
- **User Experience**: Intuitive interfaces and smooth animations

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Prem Kolte**
- GitHub: [@Premkolte](https://github.com/Premkolte)
- LinkedIn: [Connect with me](https://linkedin.com/in/premkolte)

---

## 🙏 Acknowledgments

- **React Team**: For the amazing React framework
- **Vite Team**: For blazing-fast build tooling
- **Tailwind CSS**: For utility-first styling
- **Open Source Community**: For inspiration and resources

---

<div align="center">
  <p><strong>Made with ❤️ and lots of ☕</strong></p>
  <p>If you found this project helpful, please give it a ⭐!</p>
</div>

---

## 📞 Support

Having issues or questions? We're here to help!

- 🐛 **Bug Reports**: [Open an Issue](https://github.com/Premkolte/DishRecipe/issues)
- 💬 **Discussions**: [Join the Discussion](https://github.com/Premkolte/DishRecipe/discussions)
- 📧 **Email**: premkolte@example.com

---

*Happy Cooking! 🍳👨‍🍳👩‍🍳*
