/**
 * Created by 46426 on 2018/1/16.
 */
/*ÂÖ²¥Í¼*/
$(()=>{var moved= 0,LIWIDTH=1400
    var $ul=$('.bannerImg')
    setInterval(()=>{
        moved++;
        $ul.animate({
            left:-LIWIDTH*moved
        },1000,function(){
            if(moved==4){
                moved=0;
                $ul.css("left",0);
            }
        })
    },2000);
});
/*Â¥²ã¹ö¶¯*/
$(()=>{
    $(window).scroll(()=>{
        var scrollTop=$(window).scrollTop();
        var offsetTop=$(".floor:first").offset().top;
        if(offsetTop<=scrollTop+innerHeight/2){
            $(".lift").show();
        }else{
            $(".lift").hide();
        }
        var $floors=$(".floor");
        for(var i=0;i<$floors.length;i++){
            var $f=$($floors[i]);
            if($f.offset().top>scrollTop+innerHeight/2){
                break;
            }
        }
        console.log(i);
        $(`#lift>ul>li:eq(${i-1})`)
            .addClass("lift_item_on")
            .siblings().removeClass("lift_item_on")
    })
    $("#lift>ul").on("click","a.lift_btn",function(){
        var $a=$(this);
        var i=$a.parent().index();
        var offsetTop=$(`.floor:eq(${i})`).offset().top;
        $("html").stop(true).animate({
            scrollTop:offsetTop-50
        },500)
    })
})
