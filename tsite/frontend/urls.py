from django.urls import path
from django.views.generic.base import RedirectView
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('trotuarnaya-plitka-bordyur-zaporozhe/', views.sett, name='sett'),
    path('trotuarnaya-plitka-bordyur-zaporozhe/<str:pk>', views.productPage, name='settPage'),
    path('products/6-Trotuarnaya-plitka-Bordyur/', RedirectView.as_view(pattern_name="sett", permanent=True)),

    path('evrozabory-glyancevye-zaporozhe/', views.fence, name='fence'),
    path('evrozabory-glyancevye-zaporozhe/<str:pk>', views.productPage, name='fencePage'),
    path('products/8-Evrozabory/', RedirectView.as_view(pattern_name="fence", permanent=True)),

    path('blok-kirpich-oblitsovochnyj-dekorativnyj/', views.brick, name='brick'),
    path('blok-kirpich-oblitsovochnyj-dekorativnyj/<str:pk>', views.productPage, name='brickPage'),
    path('products/9-Kirpich-i-blok-kolotyy-dekorativnyy/', RedirectView.as_view(pattern_name="brick", permanent=True)),

    path('parapety-kryshki-v-zaporozhe/', views.parapet, name='parapet'),
    path('parapety-kryshki-v-zaporozhe/<str:pk>', views.productPage, name='parapetPage'),

    path('pamyatniki-i-otmostki-zaporozhe/', views.monuments, name='monuments'),
    path('pamyatniki-i-otmostki-zaporozhe/<str:pk>', views.productPage, name='monumentsPage'),
    path('products/7-Pamyatniki-i-otmostki/', RedirectView.as_view(pattern_name="monuments", permanent=True)),

    # !
    path('novosti/', views.news, name='news'),
    # Services
    path('nashi-uslugi/', views.uslugi, name='uslugi'),
    path('nashi-uslugi/ukladka-trotuarnoj-plitki/', views.ustanovka, name='ukladka-plitki'),
    path('nashi-uslugi/ustanovka-evrozabora/', views.ustanovka, name='ustanovka-evrozabora'),
    path('nashi-uslugi/ustanovka-pamyatnikov/', views.ustanovka, name='ustanovka-pamyatnikov'),
    path('nashi-uslugi/dostavka/', views.dostavka, name='dostavka'),
    path('nashi-uslugi/zamer/', views.zamer, name='zamer'),
    # !
    path('sertifikaty/', views.sertificates, name='sertificates'),
    path('nashi-raboty/', views.our_works, name='our_works'),
    # path('trotuarnaya-plitka-zaporozhe/', views.news, name='sett'),
    # path('evrozabory-zaporozhe/', views.news, name='fence'),
]
