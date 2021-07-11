FROM httpd:2.4.48

COPY dist/ /usr/local/apache2/htdocs/
