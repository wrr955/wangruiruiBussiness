const data=[
    {'id':1, 'title': '电风扇','price':260, src:'./static/1.jpg' },
    {'id':2, 'title': '空调','price':3000, src:'./static/2.jpg' },
    {'id':3, 'title': '电饭煲','price':380, src:'./static/3.jpg' },
    {'id':4, 'title': '电热水器','price':2400, src:'./static/4.jpg' },
    {'id':5, 'title': '微波炉','price':420, src:'./static/5.jpg' },
    {'id':6, 'title': '吹风机','price':150, src:'./static/6.jpg' },
    {'id':7, 'title': '榨汁机','price':200, src:'./static/7.jpg' },
    {'id':8, 'title': '冰箱','price':1930, src:'./static/8.jpg' },
]

export default{
    getGoodsList (callback) {
      setTimeout(() => callback(data), 100)
    }
}