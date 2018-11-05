{% spaceless %}
{# {% import 'partials/core/components-importer.twig' as components %} #}
{% endspaceless %}<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    {# {{ components.navigation() }} #}
    <div class="grid-container">
        {% block content %}
            <h1>Layout Template</h1>
            <p>You shouldn't see this at all</p>
        {% endblock %}
    </div>
    {# {{ components.footer() }} #}
</body>
</html>
