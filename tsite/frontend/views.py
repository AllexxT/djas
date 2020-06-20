from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import pprint

from products.models import Page, News, Sertificat

pp = pprint.PrettyPrinter(width=80, compact=True)


def index(request):
    # pp.pprint(request.path)
    pageHead = Page.objects.get(page='products')
    return render(request, 'frontend/index.html', {'seo': pageHead})


def news(request):
    pageHead = Page.objects.get(page='novosti')
    news = News.objects.all()
    return render(
        request,
        'frontend/news.html',
        {'seo': pageHead, 'news': news}
    )


def sertificates(request):
    pageHead = Page.objects.get(page='sertificates')
    sertificates = Sertificat.objects.all()
    return render(
        request,
        'frontend/sertificates.html',
        {'seo': pageHead, 'sertificates': sertificates}
    )


def our_works(request):
    pageHead = Page.objects.get(page='our_works')
    return render(request, 'frontend/our_works.html', {'seo': pageHead})


def uslugi(request):
    pageHead = Page.objects.get(page='nashi-uslugi')
    return render(request, 'frontend/services.html', {'seo': pageHead})


def ustanovka(request):
    # pp.pprint(request.path.split('/')[-2])
    path = request.path.split('/')[-2]
    if path == "ukladka-trotuarnoj-plitki":
        pageHead = Page.objects.get(page='ukladka-trotuarnoj-plitki')
    if path == "ustanovka-evrozabora":
        pageHead = Page.objects.get(page='ustanovka-evrozabora')
    if path == "ustanovka-pamyatnikov":
        pageHead = Page.objects.get(page='ustanovka-pamyatnikov')
    return render(request, 'frontend/installation.html', {'seo': pageHead})


def dostavka(request):
    pageHead = Page.objects.get(page='dostavka')
    return render(request, 'frontend/dostavka.html', {'seo': pageHead})


def zamer(request):
    pageHead = Page.objects.get(page='zamer')
    return render(request, 'frontend/zamer.html', {'seo': pageHead})
