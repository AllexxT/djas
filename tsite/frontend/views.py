from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import pprint

from products.models import Page, News, Sertificat

pp = pprint.PrettyPrinter(width=80, compact=True)


def index(request):
    pp.pprint(request.path)
    pageHead = Page.objects.get(page='products')
    return render(request, 'frontend/index.html', {'seo': pageHead})


def news(request):
    pp.pprint(request.path)
    pageHead = Page.objects.get(page='novosti')
    news = News.objects.all()
    return render(
        request,
        'frontend/news.html',
        {'seo': pageHead, 'news': news}
    )


def services(request):
    pp.pprint(request.path)
    pageHead = Page.objects.get(page='services')
    return render(request, 'frontend/services.html', {'seo': pageHead})


def sertificates(request):
    pp.pprint(request.path)
    pageHead = Page.objects.get(page='sertificates')
    sertificates = Sertificat.objects.all()
    return render(
        request,
        'frontend/sertificates.html',
        {'seo': pageHead, 'sertificates': sertificates}
    )


def our_works(request):
    pp.pprint(request.path)
    pageHead = Page.objects.get(page='our_works')
    return render(request, 'frontend/our_works.html', {'seo': pageHead})
