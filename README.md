# Djas E-commerce Site

This project provides a small e‑commerce website built with Django and React.  A REST API serves product and account data to the React frontend.

## Requirements

- Python 3.7
- [pipenv](https://pipenv.pypa.io/) for managing Python dependencies (see `Pipfile`).
- Node.js and webpack for building frontend assets.
- MySQL server for the default database configuration.

## Setup

1. Install Python dependencies:

   ```bash
   pipenv install
   pipenv shell
   ```

2. Create `tsite/tsite/config/sk.py` containing your `SECRET_KEY` value. This file is ignored by git (see `tsite/tsite/config/.gitignore`).
3. Ensure MySQL is running and matches the settings in `tsite/tsite/settings.py`:

   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'tsite_db',
           'USER': 'tsiteuser',
           'PASSWORD': 'narlaron120'
       }
   }
   ```

   Adjust credentials as needed.
4. Apply migrations:

   ```bash
   python manage.py migrate
   ```

5. Build frontend assets:

   ```bash
   webpack
   ```

   The compiled files are placed under `tsite/frontend/static/frontend`.
6. Compile SCSS stylesheets located in the `scss/` directory to `tsite/frontend/static/frontend/css/` (for example using `sass scss:tsite/frontend/static/frontend/css`).
7. Collect static files and start the server:

   ```bash
   python manage.py collectstatic
   python manage.py runserver
   ```

## API Endpoints

Account endpoints defined in `accounts/urls.py`:

- `api/auth` (Knox authentication)
- `api/auth/register`
- `api/auth/login`
- `api/auth/user`
- `api/auth/logout`

Product endpoints defined in `products/urls.py`:

- `api/products`
- `api/product`
- `api/news`
- `api/exposition`
- `api/serviceprices`
- `api/sertificat`
- `api/page`

## Static Files

Static files are served from `tsite/frontend/static`. After compiling SCSS and running `collectstatic`, static assets will be available under `static/` for deployment.

