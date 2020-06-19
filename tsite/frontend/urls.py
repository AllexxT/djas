from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('novosti/', views.news, name='news'),
    path('nashi-uslugi/', views.services, name='services'),
    path('sertifikaty/', views.sertificates, name='sertificates'),
    path('nashi-raboty/', views.our_works, name='our_works'),
    # path('trotuarnaya-plitka-zaporozhe/', views.news, name='sett'),
    # path('evrozabory-zaporozhe/', views.news, name='fence'),
]
