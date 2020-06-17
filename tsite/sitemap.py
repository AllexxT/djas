import pprint
from products.models import ProductCard

urlConst = {
    'base': 'http://pasenko.zp.ua/products/',
    'sett': 'sett',
    'fence': 'fence',
    'brick': 'brick',
    'parapet': 'parapet',
    'monuments': 'monuments',
}


# response = requests.get('http://pasenko.zp.ua/api/products.json')

# pp.pprint(response.text)
productsList = ProductCard.objects.all()
pagesList = list(set([product.article.page.page
                      for product in productsList]))
data = {}

for page in pagesList:
    currentList = []
    for product in productsList:
        if product.article.page.page == page:
            currentList.append(str(product.id))
    data[page] = currentList

pp = pprint.PrettyPrinter(width=80, compact=True)

pp.pprint(data)

# ./manage.py shell < sitemap.py
