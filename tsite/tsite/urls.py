from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('products.urls')),
    path('', include('accounts.urls')),
    path('admin/', admin.site.urls),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# if url not match any previous, user goes to 'frontend.urls'
urlpatterns += [
    re_path(r'^(?:.*)/?', include('frontend.urls'))
]
