var linkscount = document.getElementsByTagName('a').length;
var url = "";
var node = "";

for(var i = 0; i < linkscount; i++){
        node = document.getElementsByTagName('a')[i];
            url = node.href;
                if(url.substr(0,11) == "magnet:?xt=" || url.substr(0,7)=="ed2k://"){
                            node.href = "http://www.happyfuns.com/happyvod/api.php#!url="+ url ;
                                }
}

/*
online compile
http://mrcoles.com/bookmarklet/   
http://ted.mielczarek.org/code/mozilla/bookmarklet.html

javascript:(function(){var%20linkscount=document.getElementsByTagName('a').length;var%20url="";var%20node="";for(var%20i=0;i<linkscount;i++){node=document.getElementsByTagName('a')[i];url=node.href;if(url.substr(0,11)=="magnet:?xt="){node.href="http://www.happyfuns.com/happyvod/api.php#!url="+url;}}})();

*/
