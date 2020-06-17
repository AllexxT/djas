import uuid
from django.db import models
from django.contrib.auth.models import User
from versatileimagefield.fields import VersatileImageField, PPOIField
from datetime import date

##############################################################################


# class PageImage(models.Model):
#     page = models.ForeignKey('Page', on_delete=models.CASCADE)
#     image = models.ImageField(null=True, blank=True)
#     imageName = models.CharField("название", max_length=50)

#     def __str__(self):
#         return self.imageName


class Page(models.Model):
    page = models.CharField("Страница", max_length=30, primary_key=True)
    title = models.CharField(
        "СЕО  Заголовок", max_length=165, null=True, blank=True)
    readableTitle = models.CharField(
        "Читаемый заголовок", max_length=165, null=True, blank=True)
    description = models.TextField(
        "СЕО Описание(скрытое)", blank=True, null=True)
    keywords = models.TextField(
        "СЕО Ключевые слова", blank=True, null=True)
    body = models.TextField(
        "Текст на странице", blank=True, null=True)

    def keywordsLength(self):
        if len(self.keywords.split(',')) <= 1:
            return "Нет ключевых фраз"
        return f"Количество ключевых фраз - «{len(self.keywords.split(','))}»"

    def article(self):
        return self.article_set.all()

    # def pageImage(self):
    #     return self.pageimage_set.all()

    def __str__(self):
        return str(self.page)

    class Meta:
        verbose_name_plural = 'Основные страницы СЕО'
        verbose_name = 'Страницу СЕО'


class Article(models.Model):
    article = models.CharField(
        'Тип продукта(не изменять)', max_length=30, primary_key=True)
    title = models.CharField('Заголовок', max_length=100, default='Заголовок')
    page = models.ForeignKey(Page, on_delete=models.CASCADE)
    unit = models.CharField('Единица измерения', max_length=10, blank=True)

    def __str__(self):
        return f'{self.page}, {self.title}'  # , {self.article}

    class Meta:
        ordering = ['-page']
##############################################################################


class ProductCard(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    article = models.ForeignKey(
        Article, verbose_name="sett=Тротуарка, fence=Забор, \
            brick=Кирпич, monuments=Памятники",
        on_delete=models.SET_NULL, null=True
    )
    owner = models.ForeignKey(
        User, related_name="Description", on_delete=models.CASCADE, null=True)
    name = models.CharField('Название', max_length=200, unique=True)
    description = models.TextField(
        'Описание на странице', null=True, blank=True)
    discount = models.BooleanField('Скидка', blank=True)
    sertificate = models.BooleanField('Сертификат', blank=True, default=False)
    sizes = models.TextField(max_length=400, null=True, blank=True)
    position = models.FloatField(
        'Позиция товара в списке товаров', blank=True, null=True, default=0)
    seoDescription = models.TextField(
        'СЕО описание страницы с товаром(скрытое)', null=True, blank=True)
    keywords = models.TextField('СЕО ключевые слова', null=True, blank=True)

    # Return lower price from the all colors of product
    # (if "depthPrice" is empty)
    @property
    def lowerPriceNoTable(self):
        prices = self.prices_set.all()
        try:
            if len(prices) > 0:
                return min([item.noDepthPrice for item in prices])
        except TypeError:
            return
        return None

    @property
    def news(self):
        return self.news_set.all()

    @property
    def prices(self):
        return self.prices_set.all()

    @property
    def photos(self):
        return self.photos_set.all()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Товары'
        verbose_name = 'Товар'
        ordering = ['-position']
##############################################################################


class Prices(models.Model):
    product = models.ForeignKey(
        ProductCard, on_delete=models.CASCADE, null=True
    )
    color = models.CharField(max_length=100, default='Серый')
    noDepthPrice = models.FloatField(
        'Если здесь указана цена, таблица работать не будет',
        blank=True, null=True
    )
    oldPrice = models.IntegerField(blank=True, null=True)

    @property
    def depthPrice(self):
        return self.depthprice_set.all()

    @property
    def lowerPrice(self):
        prices = self.depthprice_set.all()
        if len(prices) > 0:
            return min([item.price for item in prices])
        return None

    def __str__(self):
        return str(self.color)

    class Meta:
        verbose_name_plural = 'Цены'
        verbose_name = 'Цену'


class Depth(models.Model):
    size = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return str(self.size)


class DepthPrice(models.Model):
    prices = models.ForeignKey(Prices, on_delete=models.CASCADE)
    depth = models.ForeignKey(Depth, on_delete=models.CASCADE)
    price = models.FloatField(verbose_name='Price', null=True)

    def __str__(self):
        return str(self.price)

    # class Meta:
    #     verbose_name_plural = 'Цена/Толщина'
    #     verbose_name = 'Цена/Толщина'
##############################################################################


class Photos(models.Model):
    product = models.ForeignKey(
        ProductCard, on_delete=models.CASCADE, null=True
    )
    photo = VersatileImageField(
        verbose_name='Photo', ppoi_field='ppoi', blank=True
    )
    ppoi = PPOIField()
##############################################################################
# News #


class News(models.Model):
    product = models.ForeignKey(
        ProductCard, on_delete=models.CASCADE, null=True
    )

    title = models.CharField(max_length=100, null=True)
    body = models.TextField(max_length=500, null=True, blank=True)
    changed = models.DateTimeField(auto_now=True, blank=True)
    created = models.DateField(auto_now_add=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-changed']
        verbose_name_plural = 'Новости'
        verbose_name = 'Новость'
##############################################################################
# Exposition #


class Exposition(models.Model):
    address = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=50, null=True, blank=True)

    types = (
        ('sett', 'Тротуарка'),
        ('brick', 'Блок и кирпич'),
        ('fence', 'Забор'),
        ('parapet', 'Крышки и парапеты'),
        ('monuments', 'Памятники')
    )
    category = models.CharField(
        max_length=10,
        choices=types,
        help_text='Категория',
        default='trotuarka',
    )

    @property
    def photos(self):
        return self.expositionphotos_set.all()

    def __str__(self):
        return self.address

    class Meta:
        verbose_name_plural = 'Наши работы'
        verbose_name = 'Нашу работу'


class ExpositionPhotos(models.Model):
    exposition = models.ForeignKey(
        Exposition, on_delete=models.CASCADE, null=True
    )
    description = models.CharField(max_length=150, null=True, blank=True)
    photo = VersatileImageField(
        verbose_name='Photo', ppoi_field='ppoi', blank=True
    )
    ppoi = PPOIField()

    def __str__(self):
        return self.exposition.address
##############################################################################
# ServicePrices #


class ServicePage(models.Model):
    page = models.CharField(max_length=350, null=True, blank=True)
    pageText = models.TextField(blank=True, null=True)

    @property
    def servprices(self):
        return self.serviceprices_set.all()

    def __str__(self):
        return self.page

    class Meta:
        verbose_name_plural = 'Наши услуги'
        verbose_name = 'Нашу услугу'


class ServicePrices(models.Model):
    page = models.ForeignKey(ServicePage, on_delete=models.CASCADE)

    description = models.CharField(max_length=1000, blank=True, null=True)
    price = models.CharField(max_length=150, default=0)

    def __str__(self):
        return self.description


##############################################################################
# Sertificate #

class Sertificat(models.Model):
    name = models.CharField(max_length=200, unique=True, blank=True, null=True)
    photo = models.ImageField(blank=True, null=True)
    docFile = models.FileField(blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Сертификаты'
        verbose_name = 'Сертификат'
