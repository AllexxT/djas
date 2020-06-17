from rest_framework import routers
from .api import (ProductCardsViewSet, ProductCardViewSet,
                  NewsViewSet,
                  ExpositionViewSet, ServicePageViewSet,
                  SertificatViewSet, PageViewSet)
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path


router = routers.DefaultRouter()
router.register('api/products', ProductCardsViewSet, 'products')
router.register('api/product', ProductCardViewSet, 'product')
router.register('api/news', NewsViewSet, 'news')
router.register('api/exposition', ExpositionViewSet, 'exposition')
router.register('api/serviceprices', ServicePageViewSet, 'serviceprices')
router.register('api/sertificat', SertificatViewSet, 'sertificat')
router.register('api/page', PageViewSet, 'page')

urlpatterns = router.urls
