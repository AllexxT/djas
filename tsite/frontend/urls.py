from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('trotuarnaya-plitka-zaporozhe/', views.sett, name='sett'),
    path('trotuarnaya-plitka-zaporozhe/<str:pk>', views.productPage, name='settPage'),

    path('evrozabory-zaporozhe/', views.fence, name='fence'),
    path('evrozabory-zaporozhe/<str:pk>', views.productPage, name='fencePage'),

    path('kirpich-i-blok-oblitsovochnyj-v-zaporozhe/', views.brick, name='brick'),
    path('kirpich-i-blok-oblitsovochnyj-v-zaporozhe/<str:pk>', views.productPage, name='brickPage'),

    path('kryshki-i-parapety-zaporozhe/', views.parapet, name='parapet'),
    path('kryshki-i-parapety-zaporozhe/<str:pk>', views.productPage, name='parapetPage'),

    path('pamyatniki-zaporozhe/', views.monuments, name='monuments'),
    path('pamyatniki-zaporozhe/<str:pk>', views.productPage, name='monumentsPage'),
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
