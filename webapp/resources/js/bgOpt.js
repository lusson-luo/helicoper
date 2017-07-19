/** 背景js */
var bgOpreater = {

    cannerWidth: 0,
    cannerheight: 0,
    walls: [],
    wallWidth: 20,
    minheight: 0.3,


    setValue: function () {
        this.cannerWidth = $("#gameCanvas").width();
        this.cannerheight = $("#gameCanvas").height();
    },

    /** 生成随机的墙 */
    addWall: function () {
        if (parseInt(Math.random() * 100) % 3 == 0) {
            var height = this.minheight * this.cannerheight / 20 + parseInt(Math.random() * this.cannerheight / 20 * (1 - this.minheight * 2));
            /** walls[width, height, type(0:up,1:down)] */
            this.walls.push([this.cannerWidth - this.wallWidth, height * 20, parseInt(Math.random() * 2)]);
        }
    },
    moveWall: function () {
        for (var i = this.walls.length - 1; i >= 0; i--) {
            this.walls[i][0] = this.walls[i][0] - this.wallWidth * 2;
            if (this.walls[i][0] < 0) {
                this.walls.splice(i, 1);
            }
        }
    },
    drawWall: function () {
        var cas = $('#gameCanvas')[0].getContext('2d');
        cas.fillStyle = '#0d2705';
        cas.clearRect(0, 0, this.cannerWidth, this.cannerheight);
        for (var i = 0; i < this.walls.length; i++) {
            if (this.walls[i][2] == 0) {
                cas.fillRect(this.walls[i][0], 0, this.wallWidth, this.walls[i][1]);
            } else {
                cas.fillRect(this.walls[i][0], this.walls[i][1], this.wallWidth, this.cannerheight - this.walls[i][1]);
            }

        }
    },
};

$(function () {

});

function xx() {
    bgOpreater.setValue();
    bgOpreater.addWall();
    bgOpreater.moveWall();
    bgOpreater.drawWall();
}

setInterval("xx()", 1000);