# Stationeers Calculator

A web-based calculator for Stationeers that helps players calculate the required materials and ores needed to craft various items in the game.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🎮 Features

- Calculate required materials for crafting items
- View detailed recipe requirements
- Easy-to-use interface
- Dark mode support
- Mobile responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joshnsmith/stationeers-calculator.git
cd stationeers-calculator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Building for Production

```bash
npm run build
# or
yarn build
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Adding New Recipes

To add new recipes, edit the `src/data/recipes.json` file. Follow the existing format:

```json
{
  "Item Name": {
    "Material 1": amount,
    "Material 2": amount,
    "smelt": true/false
  }
}
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Stationeers](https://store.steampowered.com/app/544550/Stationeers/) - The game this calculator is designed for
- [RocketWerkz](https://rocketwerkz.com/) - The game developers

## 📞 Contact

Josh Smith - [@joshnsmith](https://github.com/joshnsmith)

Project Link: [https://github.com/joshnsmith/stationeers-calculator](https://github.com/joshnsmith/stationeers-calculator)
