from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import pprint

from products.models import (
    Page, News, Sertificat, ServicePage, ProductCard
)

pp = pprint.PrettyPrinter(width=80, compact=True)


def index(request):
    # pp.pprint(request.path)
    pageHead = Page.objects.get(page='products')
    return render(request, 'frontend/index.html', {'seo': pageHead})


def sett(request):
    pp.pprint(request.path)
    pageHead = Page.objects.get(page='sett')
    cards = ProductCard.objects.filter(article__page='sett'
                                       ).prefetch_related(
    ).prefetch_related('article')
    vibropressed = cards.filter(article__article="vibropressed")
    vibrocast = cards.filter(article__article="vibrocast")
    gully = cards.filter(article__article="gully")
    borders = cards.filter(article__article="borders")
    return render(
        request,
        'frontend/products/sett.html',
        {
            'seo': pageHead,
            "vibropressed": vibropressed,
            "vibrocast": vibrocast,
            "gully": gully,
            "borders": borders,
        }
    )


def fence(request):
    # pp.pprint(request.path)
    pageHead = Page.objects.get(page='fence')
    cards = ProductCard.objects.filter(article__page='fence'
                                       ).prefetch_related(
    ).prefetch_related('article')
    ordinary = cards.filter(article__article="ordinary")
    glossy = cards.filter(article__article="glossy")
    columns = cards.filter(article__article="columns")
    return render(
        request,
        'frontend/products/fence.html',
        {
            'seo': pageHead,
            "ordinary": ordinary,
            "glossy": glossy,
            "columns": columns,
        }
    )


def brick(request):
    # pp.pprint(request.path)
    pageHead = Page.objects.get(page='brick')
    cards = ProductCard.objects.filter(article__page='brick'
                                       ).prefetch_related(
    ).prefetch_related('article')
    facblock = cards.filter(article__article="facblock")
    baseblock = cards.filter(article__article="baseblock")
    buildblock = cards.filter(article__article="buildblock")
    facbrick = cards.filter(article__article="facbrick")
    return render(
        request,
        'frontend/products/brick.html',
        {
            'seo': pageHead,
            'facblock': facblock,
            'baseblock': baseblock,
            'buildblock': buildblock,
            'facbrick': facbrick,
        }
    )


def parapet(request):
    # pp.pprint(request.path)
    pageHead = Page.objects.get(page='parapet')
    cards = ProductCard.objects.filter(article__page='parapet'
                                       ).prefetch_related(
    ).prefetch_related('article')
    cap = cards.filter(article__article="cap")
    parapet = cards.filter(article__article="parapet")
    return render(
        request,
        'frontend/products/parapet.html',
        {
            'seo': pageHead,
            'cap': cap,
            'parapet': parapet
        }
    )


def monuments(request):
    # pp.pprint(request.path)
    pageHead = Page.objects.get(page='monuments')
    cards = ProductCard.objects.filter(article__page='monuments'
                                       ).prefetch_related(
    ).prefetch_related('article')
    granite = cards.filter(article__article="granite")
    capital = cards.filter(article__article="capital")
    nameplate = cards.filter(article__article="nameplate")
    coverplate = cards.filter(article__article="coverplate")
    return render(
        request,
        'frontend/products/monuments.html',
        {
            'seo': pageHead,
            'granite': granite,
            'capital': capital,
            'nameplate': nameplate,
            'coverplate': coverplate,
        }
    )


def productPage(request, pk):
    product = ProductCard.objects.get(pk=pk)
    return render(
        request,
        'frontend/products/productPage.html',
        {"product": product}
    )


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

    pageHead = Page.objects.get(page=path)
    table = ServicePage.objects.get(page=path)
    if path == "ukladka-trotuarnoj-plitki":
        info = {"catalog": "Каталог Тротуарной Плитки", "page": "sett"}
    elif path == "ustanovka-evrozabora":
        info = {"catalog": "Каталог Еврозабора", "page": "fence"}
    elif path == "ustanovka-pamyatnikov":
        info = {"catalog": "Каталог Памятников", "page": "monuments"}

    return render(
        request,
        'frontend/installation.html',
        {'seo': pageHead, 'table': table.servprices,
            'title': table.title, 'description': table.pageText,
            'info': info}
    )


def dostavka(request):
    pageHead = Page.objects.get(page='dostavka')
    return render(request, 'frontend/dostavka.html', {'seo': pageHead})


def zamer(request):
    pageHead = Page.objects.get(page='zamer')
    return render(request, 'frontend/zamer.html', {'seo': pageHead})
