from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
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
