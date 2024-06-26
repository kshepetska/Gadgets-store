import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { Sort } from './types/Sort';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    resources: {
      en: {
        translation: {
          home: 'Home',
          phones: 'Phones',
          Phones: 'Phones',
          tablets: 'Tablets',
          Tablets: 'Tablets',
          accessories: 'Accessories',
          Accessories: 'Accessories',
          welcomeToNiceGadgetsStore: 'Welcome to Nice Gadgets store!',
          brandNewModels: 'Brand new models',
          shopByCategory: 'Shop by category',
          hotPrices: 'Hot prices',
          mobilePhones: 'Mobile phones',
          models: 'models',
          sortBy: 'Sort by',
          itemsOnPage: 'Items on page',
          screen: 'Screen',
          capacity: 'Capacity',
          RAM: 'RAM',
          addToCart: 'Add to Cart',
          addedToCart: 'Added to Cart',
          github: 'Github',
          contacts: 'Contacts',
          rights: 'Rights',
          backToTop: 'Back to top',
          [Sort.Newest]: 'Newest',
          [Sort.Alphabetically]: 'Alphabetically',
          [Sort.PriceLow]: 'Price low',
          [Sort.PriceHigh]: 'Price high',
          all: 'All',
          items: 'items',
          yourCartIsEmpty: 'Your cart is empty',
          searchForProduct: 'Search for a product',
          favourites: 'Favourites',
          cart: 'Cart',
          totalFor: 'Total for',
          checkout: 'Checkout',
          wantToConfirmOrder: 'Do you want to confirm the order?',
          no: 'No',
          yes: 'Yes',
          goBack: 'Go back',
          availableColors: 'Available colors',
          selectCapacity: 'Select capacity',
          resolution: 'Resolution',
          processor: 'Processor',
          about: 'About',
          techSpecs: 'Tech specs',
          camera: 'Camera',
          zoom: 'Zoom',
          cell: 'Cell',
          youMayAlsoLike: 'You may also like',
          yourOrderHasBeenPlacedSuccessfuly:
            'Your order has been placed successfully!',
          rightsText:
            'All rights belong to the CodeUp team and are protected. Our code is our tool for innovation and building the future. Every line of code is a step forward in our mission to make technology accessible and useful for everyone. ',
        },
      },
      fr: {
        translation: {
          home: 'Accueil',
          phones: 'Téléphones',
          Phones: 'Téléphones',
          tablets: 'Tablettes',
          Tablets: 'Tablettes',
          accessories: 'Accessoires',
          Accessories: 'Accessoires',
          welcomeToNiceGadgetsStore: 'Bienvenue chez Nice Gadgets !',
          brandNewModels: 'Nouveaux modèles',
          shopByCategory: 'Acheter par catégorie',
          hotPrices: 'Prix chauds',
          mobilePhones: 'Téléphones mobiles',
          models: 'modèles',
          sortBy: 'Trier par',
          itemsOnPage: 'Articles par page',
          screen: 'Écran',
          capacity: 'Capacité',
          RAM: 'RAM',
          addToCart: 'Ajouter au panier',
          addedToCart: 'Ajouté au panier',
          github: 'Github',
          contacts: 'Contacts',
          rights: 'Droits',
          backToTop: 'Retour en haut',
          [Sort.Newest]: 'Plus récent',
          [Sort.Alphabetically]: 'Par ordre alphabétique',
          [Sort.PriceLow]: 'Prix bas',
          [Sort.PriceHigh]: 'Prix élevé',
          all: 'Tous',
          items: 'Articles',
          yourCartIsEmpty: 'Votre panier est vide',
          searchForProduct: 'Rechercher un produit',
          favourites: 'Favoris',
          cart: 'Panier',
          totalFor: 'Total pour',
          checkout: 'Paiement',
          wantToConfirmOrder: 'Voulez-vous confirmer la commande?',
          no: 'Non',
          yes: 'Oui',
          goBack: 'Retourner',
          availableColors: 'Couleurs disponibles',
          selectCapacity: 'Sélectionnez la capacité',
          resolution: 'Résolution',
          processor: 'Processeur',
          about: 'À propos',
          techSpecs: 'Spécifications techniques',
          camera: 'Caméra',
          zoom: 'Zoom',
          cell: 'Cellule',
          youMayAlsoLike: 'Vous aimerez peut-être aussi',
          yourOrderHasBeenPlacedSuccessfuly:
            'Votre commande a été passée avec succès!',
          rightsText: `Tous les droits appartiennent à l'équipe CodeUp et sont protégés. Notre code est notre outil d'innovation et de construction de l'avenir. Chaque ligne de code est un pas en avant dans notre mission de rendre la technologie accessible et utile pour tous.`,
        },
      },
      ua: {
        translation: {
          home: 'Головна',
          phones: 'Телефони',
          Phones: 'Телефони',
          tablets: 'Планшети',
          Tablets: 'Планшети',
          accessories: 'Аксесуари',
          Accessories: 'Аксесуари',
          welcomeToNiceGadgetsStore: 'Ласкаво просимо в магазин Nice Gadgets!',
          brandNewModels: 'Нові моделі',
          shopByCategory: 'За категоріями',
          hotPrices: 'Гарячі ціни',
          mobilePhones: 'Мобільні телефони',
          models: 'моделі',
          sortBy: 'Сортувати за',
          itemsOnPage: 'Товарів на сторінці',
          screen: 'Екран',
          capacity: 'Ємність',
          RAM: 'ОЗП',
          addToCart: 'Додати в кошик',
          addedToCart: 'Додано в кошик',
          github: 'Github',
          contacts: 'Контакти',
          rights: 'Права',
          backToTop: 'Вгору',
          [Sort.Newest]: 'Найновіші',
          [Sort.Alphabetically]: 'За алфавітом',
          [Sort.PriceLow]: 'За ціною (зростання)',
          [Sort.PriceHigh]: 'За ціною (спадання)',
          all: 'Всі',
          items: 'товар(и)',
          yourCartIsEmpty: 'Ваш кошик порожній',
          searchForProduct: 'Пошук продукту',
          favourites: 'Вибране',
          cart: 'Кошик',
          totalFor: 'Всього за',
          checkout: 'Оформити замовлення',
          wantToConfirmOrder: 'Бажаєте підтвердити замовлення?',
          no: 'Ні',
          yes: 'Так',
          goBack: 'Повернутися',
          availableColors: 'Доступні кольори',
          selectCapacity: 'Виберіть ємність',
          resolution: 'Роздільна здатність',
          processor: 'Процесор',
          about: 'Про товар',
          techSpecs: 'Технічні характеристики',
          camera: 'Камера',
          zoom: 'Збільшення',
          cell: 'Бездротові технології',
          youMayAlsoLike: 'Вам також може сподобатися',
          yourOrderHasBeenPlacedSuccessfuly:
            'Ваше замовлення успішно оформлено!',
          rightsText:
            'Усі права належать команді CodeUp і захищені. Наш код - це наш інструмент для інновацій та будівництва майбутнього. Кожен рядок коду - це крок вперед у нашій місії зробити технології доступними і корисними для всіх.',
        },
      },
      zh: {
        translation: {
          home: '主页',
          phones: '电话',
          Phones: '电话',
          tablets: '平板电脑',
          Tablets: '平板电脑',
          accessories: '配件',
          Accessories: '配件',
          welcomeToNiceGadgetsStore: '欢迎来到美好的小工具商店！',
          brandNewModels: '全新款式',
          shopByCategory: '按类别购买',
          hotPrices: '超值价格',
          mobilePhones: '手机',
          models: '型号',
          sortBy: '排序方式',
          itemsOnPage: '每页显示项目数',
          screen: '屏幕',
          capacity: '容量',
          RAM: '内存',
          addToCart: '加入购物车',
          addedToCart: '已添加到购物车',
          github: 'Github',
          contacts: '联系方式',
          rights: '版权',
          backToTop: '返回顶部',
          [Sort.Newest]: '最新款',
          [Sort.Alphabetically]: '按字母顺序',
          [Sort.PriceLow]: '价格低',
          [Sort.PriceHigh]: '价格高',
          all: '全部',
          items: '项目',
          yourCartIsEmpty: '您的购物车为空',
          searchForProduct: '搜索产品',
          favourites: '收藏夹',
          cart: '购物车',
          totalFor: '总计',
          checkout: '结帐',
          wantToConfirmOrder: '您要确认订单吗？',
          no: '否',
          yes: '是',
          goBack: '返回',
          availableColors: '可用颜色',
          selectCapacity: '选择容量',
          resolution: '分辨率',
          processor: '处理器',
          about: '关于',
          techSpecs: '技术规格',
          camera: '相机',
          zoom: '缩放',
          cell: '电池',
          youMayAlsoLike: '您可能也喜欢',
          yourOrderHasBeenPlacedSuccessfuly: '您的訂單已成功下單。',
          rightsText:
            '所有权利属于 CodeUp 团队，并受到保护。我们的代码是我们创新和构建未来的工具。每一行代码都是我们使技术对每个人都可访问和有用的使命的一小步。',
        },
      },
    },
  });
