from django.contrib import admin
from products.models import (
    ProductCard, Prices, Photos, News, Page, Article, DepthPrice, Depth,
    Exposition, ExpositionPhotos, ServicePage, ServicePrices, Sertificat,
    # PageImage
)


@admin.register(ProductCard)
class ProductCardAdmin(admin.ModelAdmin):

    class PricesInline(admin.TabularInline):
        model = Prices
        extra = 0

    class PhotosInline(admin.TabularInline):
        model = Photos
        extra = 0

    class NewsInline(admin.TabularInline):
        model = News
        extra = 0
    inlines = [PhotosInline, NewsInline, PricesInline]

    fields = (
        'name',
        'position',
        'article',
        'discount',
        'sertificate',
        'description',
        'seoDescription',
        'keywords',
        'sizes',
    )
    list_display = (
        'name',
        'position',
        'article',
        # 'description',
        'discount',
        'sizes',
        'sertificate',
    )
    search_fields = ('article__title',)


# @admin.register(PageImage)
# class PageImageAdmin(admin.ModelAdmin):
#     fields = (
#         'page',
#         'imageName',
#         'image'
#     )


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):

    class ArticleInline(admin.TabularInline):
        model = Article
        extra = 0

    # class PageImageAdmin(admin.TabularInline):
    #     model = PageImage
    #     extra = 0
    # inlines = [PageImageAdmin]

    fields = (
        'page',
        'readableTitle',
        'title',
        'description',
        'keywords',
        'body',
    )
    list_display = (
        'page',
        'readableTitle',
        'title',
        'description',
        'keywordsLength',
        'body',
    )


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    class ProductCardInline(admin.StackedInline):
        model = ProductCard
        extra = 0
    inlines = [ProductCardInline]

    fields = (
        'page',
        'article',
        'title',
        'unit',
    )
    list_display = (
        'page',
        'article',
        'title',
        'unit',
    )


@admin.register(Prices)
class PricesAdmin(admin.ModelAdmin):
    class DepthPriceInline(admin.TabularInline):
        model = DepthPrice
        extra = 0
    inlines = [DepthPriceInline]
    fields = (
        'product',
        'color',
        'noDepthPrice',
        'oldPrice',
    )
    list_display = (
        'product',
        'color',
        'noDepthPrice',
        'oldPrice',
    )


@admin.register(Depth)
class DepthAdmin(admin.ModelAdmin):
    class DepthPriceInline(admin.StackedInline):
        model = DepthPrice
        extra = 0
    inlines = [DepthPriceInline]
    fields = (
        'size',
    )


@admin.register(DepthPrice)
class DepthPriceAdmin(admin.ModelAdmin):
    fields = (
        'price',
    )


@admin.register(Photos)
class PhotosAdmin(admin.ModelAdmin):
    fields = (
        'product',
        'photo',
    )


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    fields = (
        'product',
        'title',
        'body',
    )
    list_display = (
        'product',
        'title',
        'body',
    )


@admin.register(ExpositionPhotos)
class ExpositionPhotosAdmin(admin.ModelAdmin):
    fields = (
        'description',
        'photo',
    )
    list_display = (
        'description',
        'photo',
    )


@admin.register(Exposition)
class ExpositionAdmin(admin.ModelAdmin):
    class ExpositionPhotosInline(admin.StackedInline):
        model = ExpositionPhotos
        extra = 0
    inlines = [ExpositionPhotosInline]

    fields = (
        'category',
        'address',
        'description',
    )
    list_display = (
        'category',
        'address',
        'description',
    )


@admin.register(ServicePrices)
class ServicePricesAdmin(admin.ModelAdmin):
    fields = (
        'description',
        'price',
    )
    list_display = (
        'description',
        'price',
    )


@admin.register(ServicePage)
class ServicePageAdmin(admin.ModelAdmin):
    class ServicePricesAdminInline(admin.StackedInline):
        model = ServicePrices
        extra = 0
    inlines = [ServicePricesAdminInline]
    fields = (
        'page',
        'pageText',
    )
    list_display = (
        'page',
        'pageText',
    )


@admin.register(Sertificat)
class SertificatAdmin(admin.ModelAdmin):

    fields = (
        'name',
        'docFile',
        'photo'
    )
    list_display = (
        'name',
        'docFile',
        'photo'
    )
