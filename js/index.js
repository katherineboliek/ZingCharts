var app = angular.module('myApp',['zingchart-angularjs']);

app.controller('MainController', function($scope){
  $scope.myJson = {
    "type" : 'line',
    "title": {
      "text":"Katherine's Interests Over Her Lifetime"
    },
    "plot": {
      "aspect": "spline",
      "marker": {
        "visible": false
      },
      "tooltip": {
        "visible": false
      },
      "animation":{
        "effect":"ANIMATION_FADE_IN",
        "method":"3",
        "sequence":"ANIMATION_BY_PLOT_AND_NODE",
        "speed":20
      }
    },
    "labels": [{ //Dynamic Labels
      "text": "Reading: %plot-0-value",
      "default-value": "  ",
      "text-align": "left",
      "background-color": "#F4B393",
      "font-color": "white",
      "padding": "5%",
      "border-radius": "5px",
      "height": "30px",
      "width": "100px",
      "x": "10%",
      "y": "12%"
    }, {
      "text": "Technology: %plot-1-value",
      "default-value": "  ",
      "text-align": "left",
      "background-color": "#CEEC97",
      "font-color": "white",
      "padding": "5%",
      "border-radius": "5px",
      "height": "30px",
      "width": "100px",
      "x": "10%",
      "y": "18%"
    }, {
      "text": "Internet: %plot-2-value",
      "default-value": "  ",
      "text-align": "left",
      "background-color": "#3C91E6",
      "font-color": "white",
      "padding": "5%",
      "border-radius": "5px",
      "height": "30px",
      "width": "100px",
      "x": "10%",
      "y": "24%"
    }
    , {
      "text": "Design: %plot-3-value",
      "default-value": "  ",
      "text-align": "left",
      "background-color": "#2A1E5C",
      "font-color": "white",
      "padding": "5%",
      "border-radius": "5px",
      "height": "30px",
      "width": "100px",
      "x": "10%",
      "y": "30%"
    }
    , {
      "text": "Development: %plot-4-value",
      "default-value": "  ",
      "text-align": "left",
      "background-color": "#3CBBB1",
      "font-color": "white",
      "padding": "5%",
      "border-radius": "5px",
      "height": "30px",
      "width": "100px",
      "x": "10%",
      "y": "36%"
    }],
    "crosshair-x": {
      "plot-label": {
        "visible": false
      }
    },
    "scale-x": {
    "label":{ /* Add a scale title with a label object. */
      "text":"Katherine's lifetime",
    },
    /* Add your scale labels with a labels array. */
    "labels":["1994","1996","1998","2000","2002","2004","2006","2008","2010","2012","2014","2016"]
    },
    "series" : [
      { values : [0,20,60,65,70,60,55,40,30,50,70,85], "text":"Reading", "line-color":"#F4B393"},
      { values : [0,10,20,45,55,65,70,75,80,85,95,100], "text":"Technology", "line-color":"#CEEC97"},
      { values : [0,0,0,20,25,45,60,70,75,85,90,95], "text":"Internet", "line-color":"#3C91E6"},
      { values : [0,0,10,10,10,10,10,10,10,75,100,100], "text":"Design", "line-color":"#2A1E5C"},
      { values : [0,0,0,0,10,12,14,16,18,20,50,70], "text":"Development", "line-color":"#3CBBB1"}
    ]
};
});
