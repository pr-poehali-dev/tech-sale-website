import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 89990,
      originalPrice: 99990,
      image: '/img/d097f01e-1518-4bf7-b600-4ec196650cab.jpg',
      category: 'smartphones',
      condition: 'new',
      rating: 4.8,
      reviews: 156,
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'MacBook Pro 14"',
      price: 149990,
      originalPrice: 179990,
      image: '/img/726f11c3-477b-41f0-872b-abef6289d4e6.jpg',
      category: 'laptops',
      condition: 'used',
      rating: 4.7,
      reviews: 89,
      badge: 'Б/У'
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5',
      price: 24990,
      originalPrice: 29990,
      image: '/img/8368fc80-8ece-43f3-9f6c-a52771554303.jpg',
      category: 'headphones',
      condition: 'new',
      rating: 4.9,
      reviews: 234,
      badge: 'Новинка'
    },
    {
      id: 4,
      name: 'iPad Air',
      price: 45990,
      originalPrice: 54990,
      image: '/img/d097f01e-1518-4bf7-b600-4ec196650cab.jpg',
      category: 'tablets',
      condition: 'used',
      rating: 4.6,
      reviews: 67,
      badge: 'Б/У'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3x3' },
    { id: 'smartphones', name: 'Смартфоны', icon: 'Smartphone' },
    { id: 'laptops', name: 'Ноутбуки', icon: 'Laptop' },
    { id: 'tablets', name: 'Планшеты', icon: 'Tablet' },
    { id: 'headphones', name: 'Наушники', icon: 'Headphones' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={24} className="text-black" />
              <h1 className="text-xl font-bold text-black">TechStore</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-600 hover:text-black transition-colors">Каталог</a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">О нас</a>
              <a href="#delivery" className="text-gray-600 hover:text-black transition-colors">Доставка</a>
              <a href="#payment" className="text-gray-600 hover:text-black transition-colors">Оплата</a>
              <a href="#reviews" className="text-gray-600 hover:text-black transition-colors">Отзывы</a>
            </nav>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {cart.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
                      {cart.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Корзина</SheetTitle>
                  <SheetDescription>
                    {cart.length === 0 ? 'Ваша корзина пуста' : `Товаров в корзине: ${cart.length}`}
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.price.toLocaleString()} ₽</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  ))}
                  {cart.length > 0 && (
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold">Итого:</span>
                        <span className="font-bold text-lg">{cartTotal.toLocaleString()} ₽</span>
                      </div>
                      <Button className="w-full bg-black text-white hover:bg-gray-800">
                        Оформить заказ
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black mb-4">
              Техника для современной жизни
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Новая и проверенная б/у техника с гарантией качества. 
              Быстрая доставка по всей России.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-black text-white hover:bg-gray-800">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button variant="outline">
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-black text-center mb-12">Каталог товаров</h3>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon name={category.icon} size={16} />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-200 border-gray-200">
                    <CardHeader className="pb-3">
                      <div className="relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-lg mb-3"
                        />
                        <Badge 
                          variant={product.condition === 'new' ? 'default' : 'secondary'}
                          className="absolute top-2 right-2"
                        >
                          {product.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews} отзывов)</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-black">
                            {product.price.toLocaleString()} ₽
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              {product.originalPrice.toLocaleString()} ₽
                            </span>
                          )}
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-black text-white hover:bg-gray-800"
                        onClick={() => addToCart(product)}
                      >
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        В корзину
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">О нас</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы специализируемся на продаже качественной техники с 2010 года. 
              Предлагаем как новые устройства, так и проверенную б/у технику с гарантией.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Гарантия качества</h4>
              <p className="text-gray-600">Все товары проходят тщательную проверку и имеют официальную гарантию</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Быстрая доставка</h4>
              <p className="text-gray-600">Доставляем заказы по всей России в течение 1-3 дней</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Поддержка 24/7</h4>
              <p className="text-gray-600">Наша команда всегда готова помочь вам с выбором и решением вопросов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery & Payment */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div id="delivery">
              <h3 className="text-3xl font-bold text-black mb-6">Доставка</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} className="text-black mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">По Москве и МО</h4>
                    <p className="text-gray-600">Курьерская доставка от 300 ₽, бесплатно от 5000 ₽</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Package" size={20} className="text-black mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Пункты выдачи</h4>
                    <p className="text-gray-600">Более 3000 пунктов по всей России</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={20} className="text-black mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Сроки доставки</h4>
                    <p className="text-gray-600">1-3 дня по России, в день заказа по Москве</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="payment">
              <h3 className="text-3xl font-bold text-black mb-6">Оплата</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CreditCard" size={20} className="text-black mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Картой онлайн</h4>
                    <p className="text-gray-600">Visa, MasterCard, МИР - безопасно и мгновенно</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Wallet" size={20} className="text-black mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Наличными</h4>
                    <p className="text-gray-600">При получении курьеру или в пункте выдачи</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Building" size={20} className="text-black mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Безналичный расчёт</h4>
                    <p className="text-gray-600">Для юридических лиц по счёту</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-black text-center mb-12">Отзывы покупателей</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Александр К.",
                rating: 5,
                text: "Отличный магазин! Купил iPhone 15 Pro, всё быстро и качественно. Рекомендую!",
                date: "2 дня назад"
              },
              {
                name: "Мария В.",
                rating: 5,
                text: "Заказывала MacBook б/у - пришёл в идеальном состоянии. Цена приятно удивила.",
                date: "1 неделю назад"
              },
              {
                name: "Дмитрий С.",
                rating: 4,
                text: "Хорошие наушники Sony, доставка быстрая. Единственное - хотелось бы больше выбора.",
                date: "2 недели назад"
              }
            ].map((review, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={16} 
                          className={`${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{review.text}</p>
                  <p className="font-medium text-black">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" size={24} className="text-white" />
                <h4 className="text-xl font-bold">TechStore</h4>
              </div>
              <p className="text-gray-400">
                Надёжный магазин техники с 2010 года. Качество и сервис на первом месте.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Смартфоны</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ноутбуки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Планшеты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Наушники</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#delivery" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#payment" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@techstore.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 123</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 TechStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;