import '../stylesheets/FavSearchComponent.css'
import { useContext, useEffect, useState } from 'react'
import triangleRight from '../images/triangle-black-left.svg'
import triangleLeft from '../images/triangle-black-right.svg'
import searchIcon from '../images/search.png'
import axios from 'axios'
import { TempFavContext } from '../App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FavSearchComponent({ type }) {

  const [search, setSearch] = useState('')
  const [request, setRequest] = useState('')
  const { tempFavData, setTempFavData } = useContext(TempFavContext)
  const [searchDatabase, setSearchDatabase] = useState([
    {
      "league": {
          "id": 2,
          "name": "UEFA Champions League",
          "type": "Cup",
          "logo": "https://media-1.api-sports.io/football/leagues/2.png"
      },
      "country": {
          "name": "World",
          "code": null,
          "flag": null
      },
      "seasons": [
          {
              "year": 2011,
              "start": "2011-06-28",
              "end": "2012-05-19",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2012,
              "start": "2012-07-03",
              "end": "2013-05-25",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2013,
              "start": "2013-07-02",
              "end": "2014-05-24",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2014,
              "start": "2014-07-01",
              "end": "2015-06-06",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2015,
              "start": "2015-06-30",
              "end": "2016-05-28",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2016,
              "start": "2016-06-28",
              "end": "2017-06-03",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2017,
              "start": "2017-06-27",
              "end": "2018-05-26",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2018,
              "start": "2018-06-26",
              "end": "2019-06-01",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2019,
              "start": "2019-06-25",
              "end": "2020-08-23",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2020,
              "start": "2020-08-08",
              "end": "2021-05-29",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": true,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2021,
              "start": "2021-06-22",
              "end": "2022-05-28",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": true,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2022,
              "start": "2022-06-21",
              "end": "2023-06-10",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": true,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2023,
              "start": "2023-06-27",
              "end": "2023-08-16",
              "current": true,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": false,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": true
              }
          }
      ]
  },
  {
      "league": {
          "id": 40,
          "name": "Championship",
          "type": "League",
          "logo": "https://media-1.api-sports.io/football/leagues/40.png"
      },
      "country": {
          "name": "England",
          "code": "GB",
          "flag": "https://media-2.api-sports.io/flags/gb.svg"
      },
      "seasons": [
          {
              "year": 2011,
              "start": "2011-08-05",
              "end": "2012-05-19",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2012,
              "start": "2012-08-17",
              "end": "2013-05-27",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2013,
              "start": "2013-08-03",
              "end": "2014-05-24",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2014,
              "start": "2014-08-08",
              "end": "2015-05-25",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": false
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2015,
              "start": "2015-08-07",
              "end": "2016-05-28",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2016,
              "start": "2016-08-05",
              "end": "2017-05-29",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2017,
              "start": "2017-08-04",
              "end": "2018-05-26",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2018,
              "start": "2018-08-03",
              "end": "2019-05-27",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2019,
              "start": "2019-08-02",
              "end": "2020-08-04",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2020,
              "start": "2020-09-11",
              "end": "2021-05-29",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": true,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2021,
              "start": "2021-08-06",
              "end": "2022-05-29",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": true,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2022,
              "start": "2022-07-29",
              "end": "2023-05-27",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": true,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2023,
              "start": "2023-08-04",
              "end": "2024-05-04",
              "current": true,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": true,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": true,
                  "predictions": true,
                  "odds": true
              }
          }
      ]
  },
  {
      "league": {
          "id": 526,
          "name": "Trophée des Champions",
          "type": "Cup",
          "logo": "https://media-3.api-sports.io/football/leagues/526.png"
      },
      "country": {
          "name": "France",
          "code": "FR",
          "flag": "https://media-3.api-sports.io/flags/fr.svg"
      },
      "seasons": [
          {
              "year": 2012,
              "start": "2012-07-28",
              "end": "2012-07-28",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2013,
              "start": "2013-08-03",
              "end": "2013-08-03",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2014,
              "start": "2014-08-02",
              "end": "2014-08-02",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2015,
              "start": "2015-08-01",
              "end": "2015-08-01",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2016,
              "start": "2016-08-06",
              "end": "2016-08-06",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2017,
              "start": "2017-07-29",
              "end": "2017-07-29",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2018,
              "start": "2018-08-04",
              "end": "2018-08-04",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2019,
              "start": "2019-08-03",
              "end": "2019-08-03",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2020,
              "start": "2021-01-13",
              "end": "2021-01-13",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2021,
              "start": "2021-08-01",
              "end": "2021-08-01",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2022,
              "start": "2022-07-31",
              "end": "2022-07-31",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": true,
                      "statistics_players": true
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2023,
              "start": "2023-08-05",
              "end": "2023-08-05",
              "current": true,
              "coverage": {
                  "fixtures": {
                      "events": false,
                      "lineups": false,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          }
      ]
  },
  {
      "league": {
          "id": 28,
          "name": "SAFF Championship",
          "type": "Cup",
          "logo": "https://media-2.api-sports.io/football/leagues/28.png"
      },
      "country": {
          "name": "World",
          "code": null,
          "flag": null
      },
      "seasons": [
          {
              "year": 2013,
              "start": "2013-08-31",
              "end": "2013-09-11",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2015,
              "start": "2015-12-23",
              "end": "2016-01-03",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2018,
              "start": "2018-09-04",
              "end": "2018-09-15",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2021,
              "start": "2021-10-01",
              "end": "2021-10-16",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2023,
              "start": "2023-06-21",
              "end": "2023-07-04",
              "current": true,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          }
      ]
  },
  {
      "league": {
          "id": 19,
          "name": "African Nations Championship",
          "type": "Cup",
          "logo": "https://media-3.api-sports.io/football/leagues/19.png"
      },
      "country": {
          "name": "World",
          "code": null,
          "flag": null
      },
      "seasons": [
          {
              "year": 2014,
              "start": "2013-06-23",
              "end": "2014-02-01",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2016,
              "start": "2015-06-14",
              "end": "2016-02-07",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2018,
              "start": "2017-04-21",
              "end": "2018-02-04",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2020,
              "start": "2019-04-20",
              "end": "2021-02-07",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2022,
              "start": "2023-01-13",
              "end": "2023-02-04",
              "current": true,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          }
      ]
  },
  {
      "league": {
          "id": 24,
          "name": "AFF Championship",
          "type": "Cup",
          "logo": "https://media-1.api-sports.io/football/leagues/24.png"
      },
      "country": {
          "name": "World",
          "code": null,
          "flag": null
      },
      "seasons": [
          {
              "year": 2014,
              "start": "2014-10-12",
              "end": "2014-12-20",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": true,
                  "top_scorers": true,
                  "top_assists": true,
                  "top_cards": true,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2016,
              "start": "2016-10-15",
              "end": "2016-12-17",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2018,
              "start": "2018-09-01",
              "end": "2018-12-15",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2020,
              "start": "2021-12-01",
              "end": "2022-01-01",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2022,
              "start": "2022-11-05",
              "end": "2023-01-16",
              "current": true,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          }
      ]
  },
  {
      "league": {
          "id": 23,
          "name": "EAFF E-1 Football Championship",
          "type": "Cup",
          "logo": "https://media-1.api-sports.io/football/leagues/23.png"
      },
      "country": {
          "name": "World",
          "code": null,
          "flag": null
      },
      "seasons": [
          {
              "year": 2015,
              "start": "2014-07-21",
              "end": "2015-08-09",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2017,
              "start": "2016-06-30",
              "end": "2017-12-16",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2019,
              "start": "2018-09-02",
              "end": "2019-12-18",
              "current": false,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          },
          {
              "year": 2021,
              "start": "2022-07-19",
              "end": "2022-07-27",
              "current": true,
              "coverage": {
                  "fixtures": {
                      "events": true,
                      "lineups": true,
                      "statistics_fixtures": false,
                      "statistics_players": false
                  },
                  "standings": false,
                  "players": false,
                  "top_scorers": false,
                  "top_assists": false,
                  "top_cards": false,
                  "injuries": false,
                  "predictions": true,
                  "odds": false
              }
          }
      ]
  },
  ])

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequest(search)
  }

  const handleChangeInput = (event) => {
    setSearch(event.target.value)
  }

  const handleDisabled = () => {
    if (search.length == 0) {
      return true
    } else {
      return false
    }
  }

  // useEffect(() => {

  //   const obtainSearch = async() => {

  //     const url = 'https://v3.football.api-sports.io/' + type + 's' + '?search=' + request

  //     const config = {
  //       headers:{
  //         'x-rapidapi-key': 'cfb97c8b7f111df47e8cca192220d0d6',
  //         'x-rapidapi-host': 'v3.football.api-sports.io'
  //       }
  //     };

  //     const api = await axios.get(url, config)

  //     setSearchDatabase(api.data.response)

  //   }

  //   obtainSearch();

  // },[request])

  // console.log(searchDatabase)

  const notify = () => toast("You have reached the maximum of 4 favs, manage in 'My Favorites' tab");

  const handleClickResult = (result) => {

    const copyTempArray = [...tempFavData]
    const find = copyTempArray.findIndex((element) => element.id == result.league.id)

      if (find == -1 && copyTempArray.length <= 3) {
        copyTempArray.push(
          {
            id: result.league.id,
            name: result.league.name,
            active: false
          }
        )
        setTempFavData(copyTempArray)
      } else if (find == -1 && copyTempArray.length == 4) {
        notify()
      }
      
      if (find > -1) {
        copyTempArray.splice(find, 1)
        setTempFavData(copyTempArray)
      }
    
    
  }

  const handleClassResult = (result) => {

    const copyTempArray = [...tempFavData]
    const find = copyTempArray.findIndex((element) => element.id == result.league.id)

    if (find == -1) {
      return 'search-result-box'
    } else {
      return 'search-result-box red'
    }
  }

  return (
    <>
      <form className='form-search' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input-search'
          spellCheck='false'
          autoComplete='none'
          placeholder={`Search by ${type} name`}
          value={search}
          onChange={handleChangeInput}
        />
        <button type='submit' disabled={handleDisabled()} className='form-search-button-container'>
          <img src={triangleRight} className='triangle-for-button'/>
          <div className='button-box black search'>
            <p className='button-text white'><img src={searchIcon} className='form-search-icon' /></p>
          </div>
          <img src={triangleLeft} className='triangle-for-button'/>
        </button>
      </form>
      {searchDatabase.map(result => (
        <article className={handleClassResult(result)} key={result.league.id} onClick={()=>{handleClickResult(result)}}>
          <div className='search-result-image-box'>
            <img className='search-result-image' src={result.league.logo} />
          </div>
          <p className='search-result-name'>{result.league.name.toUpperCase()}</p>
        </article>
      ))}
      <div>
        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />
      </div>
    </>
  )
}

export default FavSearchComponent;