import pytest

from meteofrance_api import MeteoFranceClient
from meteofrance_api.helpers import readeable_phenomenoms_dict


@pytest.mark.parametrize("city", ["paris"])
def test_workflow(city: str) -> None:

    #Initialisation client.
    client = MeteoFranceClient()

    #Recherche un endroit par son nom.
    list_places = client.search_places(city)
    my_place = list_places[0]

    #Récupère données météo' pour l'endroit nommé.
    my_place_weather_forecast = client.get_forecast_for_place(my_place)

    #S'il pleut dans l'heure, va récupérer données.
    if my_place_weather_forecast.position["rain_product_available"] == 1:
        my_place_rain_forecast = client.get_rain(my_place.latitude, my_place.longitude)
        next_rain_dt = my_place_rain_forecast.next_rain_date_locale()
        if not next_rain_dt:
            rain_status = "Pas de pluie prévue dans l'heure !"
            print(rain_status)
        else:
            rain_status = next_rain_dt.strftime("%H:%M")
            print(rain_status)
    else:
        rain_status = "Pas de données disponibles concernant la pluie."
        print(rain_status)

    #Récupére alertes concernant la météo.
    if my_place.admin2:
        my_place_weather_alerts = client.get_warning_current_phenomenoms(
            my_place.admin2
        )
        readable_warnings = readeable_phenomenoms_dict(
            my_place_weather_alerts.phenomenons_max_colors
        )

    # assert type(my_place_daily_forecast) == list
    assert rain_status
    assert type(readable_warnings) == dict

test_workflow("brest")