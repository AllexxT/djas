import json
import pprint
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import get_object_or_404

from products.models import (
    Page, News, Sertificat, ServicePage, ProductCard,
    Exposition
)

pp = pprint.PrettyPrinter(width=80, compact=True)


def ldJson(cards):
    ldJsonProducts = []

    for card in cards:
        price = 0
        if card.lowerPriceNoTable:
            price = card.lowerPriceNoTable
        elif len(card.prices) > 0:
            price = card.prices[0].lowerPrice
        # if type(price) != str:
        #     price = ('%f' % price).rstrip('0').rstrip('.')

        photo = None
        if len(card.photos) > 0:
            photo = "https://trotuar-bud.zp.ua"+card.photos[0].photo.url
        ldJsonProducts.append(
            {
                "@context": "http://schema.org",
                "@type": "Product",
                "name": card.name,
                # "description": card.description[0:150]+"...",
                "image": photo,
                "url": "https://trotuar-bud.zp.ua/trotuarnaya-plitka-bordyur-zaporozhe/"+card.slug,
                "brand": {
                    "@type": "Brand",
                    "name": "Тротуар-Буд"
                },
                "offers": {
                    "@type": "Offer",
                    "price": float("%.2f" % price),
                    "priceCurrency": "UAH",
                    "availability": "http://schema.org/InStock",
                    "condition": "new"
                }
            }
        )
    return json.dumps(ldJsonProducts)


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
            "ldJsonProducts": ldJson(cards)
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
            "ldJsonProducts": ldJson(cards)
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
            "ldJsonProducts": ldJson(cards)
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
            'parapet': parapet,
            "ldJsonProducts": ldJson(cards)
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
            "ldJsonProducts": ldJson(cards)
        }
    )


def productPage(request, slug):
    product = get_object_or_404(ProductCard, slug=slug)
    
    price = 0
    if product.lowerPriceNoTable:
        price = product.lowerPriceNoTable
    elif len(product.prices) > 0:
        price = product.prices[0].lowerPrice
    # if type(price) != str:
    #     price = ('%f' % price).rstrip('0').rstrip('.')

    photo = None
    if len(product.photos) > 0:
        photo = "https://trotuar-bud.zp.ua"+product.photos[0].photo.url
    ldJson = {
        "@context": "http://schema.org",
        "@type": "Product",
        "name": product.name,
        # "description": product.description[0:150]+"...",
        "image": photo,
        "url": "https://trotuar-bud.zp.ua/trotuarnaya-plitka-bordyur-zaporozhe/"+product.slug,
        "brand": {
                    "@type": "Brand",
                    "name": "Тротуар-Буд"
        },
        "offers": {
            "@type": "Offer",
            "price": float("%.2f" % price),
            "priceCurrency": "UAH",
            "availability": "http://schema.org/InStock",
            "condition": "new"
        }
    }
    return render(
        request,
        'frontend/products/productPage.html',
        {
            "product": product,
            "ldJsonProducts": json.dumps(ldJson)
        }
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
    expositions = Exposition.objects.all()
    fence = expositions.filter(category="fence")
    sett = expositions.filter(category="sett")
    monuments = expositions.filter(category="monuments")
    brick = expositions.filter(category="brick")
    parapet = expositions.filter(category="parapet")
    return render(
        request, 'frontend/our_works.html',
        {
            'seo': pageHead,
            'expositions': expositions,
            'catList': {
                'fence': fence,
                'sett': sett,
                'monuments': monuments,
                'brick': brick,
                'parapet': parapet,
            }
        }
    )


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
