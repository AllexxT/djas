from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer
from versatileimagefield.serializers import VersatileImageFieldSerializer
from drf_writable_nested.mixins import UniqueFieldsMixin
from products.models import (
    ProductCard, Prices, Photos, News, Page, Article, Depth, DepthPrice,
    Exposition, ExpositionPhotos, ServicePage, ServicePrices, Sertificat,
    # PageImage
)


##############################################################################
# ServicePrices #

class SertificatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sertificat
        fields = [
            'id',
            'name',
            'docFile',
            'photo'
        ]
##############################################################################
# ServicePrices #


class ServicePricesSerializer(WritableNestedModelSerializer):
    class Meta:
        model = ServicePrices
        fields = [
            'description',
            'price',
        ]


class ServicePageSerializer(WritableNestedModelSerializer):
    servprices = ServicePricesSerializer(many=True)

    class Meta:
        model = ServicePage
        fields = [
            'id',
            'page',
            'pageText',
            'servprices'
        ]


##############################################################################
# Page #
# class PageImageSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = PageImage
#         fields = [
#             'page',
#             'imageName',
#             'image'
#         ]


class PageSeoSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
    # pageImage = PageImageSerializer(many=True)

    class Meta:
        model = Page
        fields = [
            'page',
            'title',
            'description',
            'keywords',
            'body',
            'pageImage'
        ]


class PageSerializer(UniqueFieldsMixin, serializers.ModelSerializer):

    class Meta:
        model = Page
        fields = [
            'page',
        ]


class ArticleSerializer(UniqueFieldsMixin, WritableNestedModelSerializer):
    page = PageSerializer()

    class Meta:
        model = Article
        fields = [
            'article',
            'title',
            'unit',
            'page',
        ]


##############################################################################
# Photos Serializer #
class PhotosSerializer(serializers.ModelSerializer):
    """Photos serializer"""
    photo = VersatileImageFieldSerializer(
        sizes=[
            ('full_size', 'url'),
            # ('thumbnail', 'thumbnail__100x100'),
            ('medium_square_crop', 'crop__400x400'),
            ('small_square_crop', 'crop__50x50')
        ]
    )

    class Meta:
        model = Photos
        fields = [
            'product',
            'id',
            'photo',
        ]
        read_only_fields = ('product',)
##############################################################################
# Price #


class DepthSerializer(WritableNestedModelSerializer):
    class Meta:
        model = Depth
        fields = [
            'id',
            'size',
        ]


class DepthPriceSerializer(WritableNestedModelSerializer):
    depth = DepthSerializer()

    class Meta:
        model = DepthPrice
        fields = [
            'price',
            'depth',
        ]


class PriceSerializer(WritableNestedModelSerializer):
    depthPrice = DepthPriceSerializer(many=True)
    lowerPrice = serializers.FloatField()

    class Meta:
        model = Prices
        fields = [
            'id',
            'product',
            'oldPrice',
            'color',
            'noDepthPrice',
            'lowerPrice',
            'depthPrice',
        ]
        read_only_fields = ('product',)


class PriceUpdateSerializer(WritableNestedModelSerializer):

    class Meta:
        model = Prices
        fields = [
            'id',
            'product',
            'oldPrice',
            'color',
            'noDepthPrice',
        ]
##############################################################################
# ProductCard #


class ProductCardsSerializer(WritableNestedModelSerializer):
    # Prices serializer
    prices = PriceSerializer(many=True, allow_null=True)
    # Photos serializer
    photos = PhotosSerializer(
        many=True, allow_null=True, partial=True, required=False)

    lowerPriceNoTable = serializers.FloatField()

    article = ArticleSerializer(allow_null=True)

    class Meta:
        model = ProductCard
        fields = (
            'id',
            'position',
            'article',
            'name',
            'sertificate',
            # 'sizes',
            # 'description',
            'discount',
            'lowerPriceNoTable',
            'prices',
            'photos',
        )


class ProductCardSerializer(WritableNestedModelSerializer):
    # Prices serializer
    prices = PriceSerializer(many=True, allow_null=True)
    # Photos serializer
    photos = PhotosSerializer(
        many=True, allow_null=True, partial=True, required=False)

    lowerPriceNoTable = serializers.FloatField()

    article = ArticleSerializer(allow_null=True)

    class Meta:
        model = ProductCard
        fields = (
            'id',
            'position',
            'article',
            'name',
            'sertificate',
            'sizes',
            'description',
            'discount',
            'seoDescription',
            'keywords',
            'lowerPriceNoTable',
            'prices',
            'photos',
        )


class ProductCardUpdateSerializer(WritableNestedModelSerializer):
    # Prices serializer
    prices = PriceUpdateSerializer(many=True, allow_null=True, partial=True)

    article = ArticleSerializer(allow_null=True)

    class Meta:
        model = ProductCard
        fields = (
            'id',
            'position',
            'article',
            'name',
            'sertificate',
            'sizes',
            'description',
            'discount',
            'prices',
        )
##############################################################################
# News #


class NewsSerializer(serializers.ModelSerializer):
    product = ProductCardSerializer(required=False)

    class Meta:
        model = News
        fields = (
            'id',
            'title',
            'body',
            'product',
            'changed',
            'created',
        )


class NewsPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = News
        fields = (
            'id',
            'title',
            'body',
            'product',
            'changed',
            'created',
        )
##############################################################################
# Exposition #


class ExpositionPhotosSerializer(serializers.ModelSerializer):
    photo = VersatileImageFieldSerializer(
        sizes=[
            ('full_size', 'url'),
            ('thumbnail', 'thumbnail__100x100'),
            ('medium_square_crop', 'crop__400x400'),
            ('small_square_crop', 'crop__50x50')
        ]
    )

    class Meta:
        model = ExpositionPhotos
        fields = (
            'id',
            'exposition',
            'description',
            'photo',
        )


class ExpositionSerializer(WritableNestedModelSerializer):
    photos = ExpositionPhotosSerializer(many=True)

    class Meta:
        model = Exposition
        fields = (
            'id',
            'category',
            'description',
            'address',
            'photos',
        )
