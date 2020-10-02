!function(e,t,i,l){"use strict";var o={init:function(){this.select_all(),this.sortable(),this.select(),this.display(),this.chosen(),this.slide_size(),this.uploadImage(),this.toggleStatus(),this.tooltip(),this.clear_selected(),new Clipboard(".soliloquy-clipboard"),e("ul#soliloquy-output").on("click","a.check",function(e){e.preventDefault()}),e(".soliloquy-clipboard").on("click",function(e){e.preventDefault()});var t=e("#soliloquy-output li").length;e(".soliloquy-count").text(t.toString()),e("input,select").conditional()},toggleStatus:function(){e("#soliloquy-settings-content").on("click.soliloquyStatus",".soliloquy-slide-status",function(t){var i="",o="";t.preventDefault(),i=e(this).hasClass("list-status")?e(this).parent().parent().parent():e(this).parent();var a=e(this),s=a.data("status"),n=i.find(".soliloquy-slide-status.list-status"),d=i.find(".soliloquy-slide-status.grid-status"),u=a.parent().parent().data("view"),r=a.data("id"),c=d.find("span.dashicons"),h=n.find("span"),m=a.data("soliloquy-tooltip");o="active"===s?"pending":"active";var y={url:l.ajax,type:"post",async:!0,cache:!1,dataType:"json",data:{action:"soliloquy_change_slide_status",post_id:l.id,slide_id:r,status:o,nonce:l.save_nonce},success:function(e){"active"===o?(d.removeClass("soliloquy-draft-slide").addClass("soliloquy-active-slide"),n.removeClass("soliloquy-draft-slide").addClass("soliloquy-active-slide"),c.removeClass("dashicons-hidden").addClass("dashicons-visibility"),h.text(l.active),d.attr("data-soliloquy-tooltip",l.active),n.data("status","active"),d.data("status","active")):(d.removeClass("soliloquy-active-slide").addClass("soliloquy-draft-slide"),n.removeClass("soliloquy-active-slide").addClass("soliloquy-draft-slide"),c.removeClass("dashicons-visibility").addClass("dashicons-hidden"),h.text(l.draft),n.data("status","pending"),d.data("status","pending"),d.attr("data-soliloquy-tooltip",l.draft))},error:function(e,t,i){}};e.ajax(y)})},tooltip:function(){e("[data-soliloquy-tooltip]").on("mouseover",function(t){t.preventDefault();var i,l=e(this).data("soliloquy-tooltip")})},select_all:function(){e(".soliloquy-select-all").change(function(){var t;if(this.checked){e("ul#soliloquy-output li").addClass("selected"),e(".soliloquy-bulk-actions").fadeIn();var i=e("ul#soliloquy-output li.selected").length;e(".select-all").text(l.selected),e(".soliloquy-count").text(i.toString()),e(".soliloquy-clear-selected").fadeIn()}else{e("ul#soliloquy-output li").removeClass("selected"),e(".soliloquy-bulk-actions").fadeOut();var o=e("ul#soliloquy-output li").length;e(".select-all").text(l.select_all),e(".soliloquy-count").text(o.toString()),e(".soliloquy-clear-selected").fadeOut()}})},sortable:function(){var t=e("#soliloquy-output");t.sortable({containment:"#soliloquy-slider-main",items:"li",cursor:"move",forcePlaceholderSize:!0,placeholder:"dropzone",update:function(i,o){var a={url:l.ajax,type:"post",async:!0,cache:!1,dataType:"json",data:{action:"soliloquy_sort_images",order:t.sortable("toArray").toString(),post_id:l.id,nonce:l.sort},success:function(e){SoliloquySlidesUpdate()},error:function(e,t,i){}};e.ajax(a)}})},select:function(){var t=!1,o=!1;e("li.soliloquy-slide .soliloquy-item-content, .soliloquy-list li a.check").on("click",function(i){var a=e(this),s=e(this).parent(),n;if(i.preventDefault(),e(s).hasClass("selected"))if(e(s).removeClass("selected"),o=!1,0!==(n=e("ul#soliloquy-output li.selected").length))e(".select-all").text(l.selected),e(".soliloquy-count").text(n.toString()),e(".soliloquy-clear-selected").fadeIn();else{var d=e("ul#soliloquy-output li").length;e(".select-all").text(l.select_all),e(".soliloquy-count").text(d.toString()),e(".soliloquy-clear-selected").fadeOut()}else{if(t&&!1!==o){var u=e("ul#soliloquy-output li").index(e(o)),r=e("ul#soliloquy-output li").index(e(s)),c=0;if(u<r)for(c=u;c<=r;c++)e("ul#soliloquy-output li:eq( "+c+")").addClass("selected");else for(c=r;c<=u;c++)e("ul#soliloquy-output li:eq( "+c+")").addClass("selected")}e(s).addClass("selected"),o=e(s),n=e("ul#soliloquy-output li.selected").length,e(".soliloquy-clear-selected").fadeIn(),e(".select-all").text(l.selected),e(".soliloquy-count").text(n.toString())}e("ul#soliloquy-output > li.selected").length>0?e(".soliloquy-bulk-actions").fadeIn():e(".soliloquy-bulk-actions").fadeOut()}),e(i).on("keyup keydown",function(e){t=e.shiftKey})},slide_size:function(){e(i).on("change","#soliloquy-config-slider-size",function(){var t=e(this),i=t.val(),o=t.find(":selected").data("soliloquy-width"),a=t.find(":selected").data("soliloquy-height");"default"==i&&(e("#soliloquy-config-slider-width").val(l.slide_width),e("#soliloquy-config-slider-height").val(l.slide_height)),o&&e("#soliloquy-config-slider-width").val(o),a&&e("#soliloquy-config-slider-height").val(a)})},clear_selected:function(){e(".soliloquy-clear-selected").on("click",function(t){t.preventDefault();var i=e("#soliloquy-output li").length;e("ul#soliloquy-output li").removeClass("selected"),e(".select-all").text(l.select_all),e(".soliloquy-count").text(i.toString()),e(".soliloquy-select-all").prop("checked",!1),e(".soliloquy-bulk-actions").fadeOut(),e(this).fadeOut()})},display:function(){e("a.soliloquy-display").on("click",function(t){if(t.preventDefault(),!e(this).hasClass("active-display")){var i=e(this),o=i.data("soliloquy-display"),a=e("#soliloquy-output"),s={url:l.ajax,type:"post",async:!0,cache:!1,dataType:"json",data:{action:"soliloquy_slider_view",post_id:l.id,view:o,nonce:l.save_nonce},success:function(e){}};e.ajax(s),e(".soliloquy-display-toggle").find(".active-display").removeClass("active-display"),i.addClass("active-display"),"grid"===o?a.removeClass("soliloquy-list").addClass("soliloquy-grid"):"list"===o&&a.removeClass("soliloquy-grid").addClass("soliloquy-list")}})},chosen:function(){e(".soliloquy-chosen").each(function(){var t=e(this).data("soliloquy-chosen-options");e(this).chosen(t)})},uploadImage:function(){e(".soliloquy-insert-image").on("click",function(t){var i;t.preventDefault();var o,a=e(event.currentTarget).parent().find("input");i?i.open():((i=wp.media.frames.soliloquy_image_frame=wp.media({frame:"select",library:{type:"image"},title:l.insert_image,button:{text:l.insert_image},contentUserSetting:!1,multiple:!1})).on("select",function(){var e=i.state().get("selection").first().toJSON();a.val(e.url)}),i.open())})}};e(function(){o.init()}),e(i).on("soliloquyType",function(){o.init()})}(jQuery,window,document,soliloquy_metabox_local),function(e,t,i,l){console.log(l),e(function(){if("undefined"!=typeof uploader){e("input#plupload-browse-button").val(l.uploader_files_computer),e(".drag-drop-info").text(l.uploader_info_text),e("#soliloquy .drag-drop-inside").append('<div class="soliloquy-progress-bar"><div></div></div>');var t=e("#soliloquy .soliloquy-progress-bar"),o=e("#soliloquy .soliloquy-progress-bar div"),a=e("#soliloquy-output");uploader.bind("FilesAdded",function(i,l){e(t).fadeIn()}),uploader.bind("UploadProgress",function(t,i){e(o).css({width:t.total.percent+"%"})}),uploader.bind("FileUploaded",function(t,o,s){e.post(l.ajax,{action:"soliloquy_load_image",nonce:l.load_image,id:s.response,post_id:l.id},function(t){switch(l.media_position){case"before":e(a).prepend(t);break;default:case"after":e(a).append(t)}e(i).trigger("soliloquyUploaded"),e(t).find(".wp-editor-container").each(function(t,i){var l=e(i).attr("id").split("-")[4];quicktags({id:"soliloquy-caption-"+l,buttons:"strong,em,link,ul,ol,li,close"}),QTags._buttonsInit()});var o=e("#soliloquy-output li").length;e(".soliloquy-count").text(o.toString()),o>0&&(e("#soliloquy-empty-slider").fadeOut().addClass("soliloquy-hidden"),e(".soliloquy-slide-header").removeClass("soliloquy-hidden").fadeIn())},"json")}),uploader.bind("UploadComplete",function(){e(t).fadeOut()}),uploader.bind("Error",function(t,i){e("#soliloquy-upload-error").html('<div class="error fade"><p>'+i.file.name+": "+i.message+"</p></div>"),t.refresh()})}})}(jQuery,window,document,soliloquy_media_uploader),jQuery(document).ready(function(e){e("a.soliloquy-media-library").on("click",function(t){t.preventDefault(),wp.media.frames.soliloquy?wp.media.frames.soliloquy.open():(wp.media.frames.soliloquy=new wp.media.view.MediaFrame.Post({title:wp.media.view.l10n.insertIntoPost,button:{text:wp.media.view.l10n.insertIntoPost},multiple:!0,library:{type:"image"}}),wp.media.frames.soliloquy.on("open",function(){var t=wp.media.frames.soliloquy.state().get("selection");e("ul#soliloquy-output li").each(function(){var i=wp.media.attachment(e(this).attr("id"));t.add(i?[i]:[])})}),wp.media.frames.soliloquy.on("ready",function(){}),wp.media.frames.soliloquy.on("insert",function(t){var i=wp.media.frames.soliloquy.state(),l=[];t.each(function(e){var t=i.display(e).toJSON(),o=e.get("type");switch(t.link){case"none":e.set("link","");break;case"file":e.set("link",e.get("url"));break;case"post":break;case"custom":e.set("link",t.linkUrl)}"image"===o&&l.push(e.toJSON())},this),e.post(soliloquy_metabox_local.ajax,{action:"soliloquy_insert_slides",nonce:soliloquy_metabox_local.insert_nonce,post_id:soliloquy_metabox_local.id,images:JSON.stringify(l)},function(t){if(t){e("#soliloquy-output").html(t.data),SoliloquySlidesUpdate();var i=e("#soliloquy-output li").length;e(".soliloquy-count").text(i.toString()),i>0&&(e("#soliloquy-empty-slider").fadeOut().addClass("soliloquy-hidden"),e(".soliloquy-slide-header").removeClass("soliloquy-hidden").fadeIn(),e(".soliloquy-bulk-actions").fadeOut())}},"json")}),wp.media.frames.soliloquy.open(),e("div.media-menu a.media-menu-item:nth-child(2)").addClass("hidden"),e("div.media-menu a.media-menu-item:nth-child(3)").addClass("hidden"),e("div.media-menu a.media-menu-item:nth-child(4)").addClass("hidden"),e("div.media-menu a.media-menu-item:nth-child(6)").addClass("hidden"))})});var SoliloquySlide=Backbone.Model.extend({defaults:{id:"",title:"",caption:"",alt:"",link:"",type:""}}),SoliloquySlides=new Backbone.Collection,SoliloquyModalWindow=new wp.media.view.Modal({controller:{trigger:function(){}}}),SoliloquyView=wp.Backbone.View.extend({id:"soliloquy-meta-edit",tagName:"div",className:"edit-attachment-frame mode-select hide-menu hide-router",template:wp.template("soliloquy-meta-editor"),events:{"click .edit-media-header .left":"loadPreviousItem","click .edit-media-header .right":"loadNextItem","keyup input":"updateItem","keyup textarea":"updateItem","change input":"updateItem","change textarea":"updateItem","keyup .CodeMirror":"updateCode","blur textarea":"updateItem","change select":"updateItem","click a.soliloquy-meta-submit":"saveItem","keyup input#link-search":"searchLinks","click div.query-results li":"insertLink","click a.soliloquy-thumbnail":"insertThumb","click a.soliloquy-thumbnail-delete":"removeThumb","click button.media-file":"insertMediaFileLink","click button.attachment-page":"insertAttachmentPageLink"},initialize:function(e){this.is_loading=!1,this.collection=e.collection,this.child_views=e.child_views,this.attachment_id=e.attachment_id,this.attachment_index=0,this.search_timer="";var t=0;this.collection.each(function(e){if(String(e.get("id"))==String(this.attachment_id))return this.model=e,this.attachment_index=t,!1;t++},this)},updateCode:function(e){$model=this.model,$textarea=this.$el.find(".soliloquy-html-slide-code"),$model.set("code",this.editor.getValue(),{silent:!0}),$textarea.text()},insertThumb:function(e){$model=this.model,e.preventDefault();var t=this.$el.data("field"),i=wp.media.frames.soliloquy_media_frame=wp.media({className:"media-frame soliloquy-media-frame",frame:"select",multiple:!1,title:soliloquy_metabox_local.videoframe,library:{type:"image"},button:{text:soliloquy_metabox_local.videouse}});i.on("select",function(){var e=i.state().get("selection").first().toJSON();$model.set("src",e.url,{silent:!0}),jQuery("div.thumbnail > img",$parent.find(".media-frame-content")).attr("src",e.url)}),i.open()},removeThumb:function(e){e.preventDefault(),$model=this.model,$parent=this.$el.parent(),jQuery("div.thumbnail > img",$parent.find(".media-frame-content")).attr("src",""),$model.set("src","",{silent:!0})},render:function(){return this.$el.html(this.template(this.model.attributes)),this.child_views.length>0&&this.child_views.forEach(function(e){var t=new e({model:this.model});this.$el.find("div.addons").append(t.render().el)},this),this.$el.find("textarea[name=caption]").val(this.model.get("caption")),setTimeout(function(){quicktags({id:"caption",buttons:"strong,em,link,ul,ol,li,close"}),QTags._buttonsInit()},500),wpLink.init,0===this.attachment_index&&this.$el.find("button.left").addClass("disabled"),this.attachment_index==this.collection.length-1&&this.$el.find("button.right").addClass("disabled"),textarea=this.$el.find(".soliloquy-html-slide-code"),textarea.length&&(this.editor=CodeMirror.fromTextArea(textarea[0],{enterMode:"keep",indentUnit:4,electricChars:!1,lineNumbers:!0,lineWrapping:!0,matchBrackets:!0,mode:"php",smartIndent:!1,tabMode:"shift",theme:"ttcn"})),this.$el.trigger("soliloquyRenderMeta"),this},loading:function(){this.is_loading=!0,this.$el.find(".spinner").css("visibility","visible")},loaded:function(e){this.is_loading=!1,this.$el.find(".spinner").css("visibility","hidden"),void 0!==e&&alert(e)},loadPreviousItem:function(){this.attachment_index--,this.model=this.collection.at(this.attachment_index),this.attachment_id=this.model.get("id"),this.render()},loadNextItem:function(){this.attachment_index++,this.model=this.collection.at(this.attachment_index),this.attachment_id=this.model.get("id"),this.render()},updateItem:function(e){""!=e.target.name&&("checkbox"==e.target.type?value=e.target.checked?1:0:value=e.target.value,this.model.set(e.target.name,value))},saveItem:function(e){e.preventDefault(),this.trigger("loading"),wp.media.ajax("soliloquy_save_meta",{context:this,data:{nonce:soliloquy_metabox_local.save_nonce,post_id:soliloquy_metabox_local.id,attach_id:this.model.get("id"),meta:this.model.attributes},success:function(e){this.trigger("loaded loaded:success");var t=JSON.stringify(this.model.attributes);jQuery("ul#soliloquy-output li#"+this.model.get("id")).attr("data-soliloquy-image-model",t);var i=this.$el.find(".saved");i.fadeIn(),setTimeout(function(){i.fadeOut()},1500)},error:function(e){this.trigger("loaded loaded:error",e)}})},searchLinks:function(e){},insertLink:function(e){},insertMediaFileLink:function(e){this.trigger("loading"),wp.media.ajax("soliloquy_get_attachment_links",{context:this,data:{nonce:soliloquy_metabox_local.save_nonce,attachment_id:this.model.get("id")},success:function(e){this.model.set("link",e.media_link),this.trigger("loaded loaded:success"),this.render()},error:function(e){this.trigger("loaded loaded:error",e)}})},insertAttachmentPageLink:function(e){this.trigger("loading"),wp.media.ajax("soliloquy_get_attachment_links",{context:this,data:{nonce:soliloquy_metabox_local.save_nonce,attachment_id:this.model.get("id")},success:function(e){this.model.set("link",e.attachment_page),this.trigger("loaded loaded:success"),this.render()},error:function(e){this.trigger("loaded loaded:error",e)}})}}),SoliloquyChildViews=[],SoliloquyContentViews=[];function SoliloquySlidesUpdate(e){var t;SoliloquySlides.reset(),jQuery("ul#soliloquy-output li.soliloquy-slide"+(e?".selected":"")).each(function(){var e=jQuery.parseJSON(jQuery(this).attr("data-soliloquy-image-model"));SoliloquySlides.add(new SoliloquySlide(e))})}!function(e){e(document).ready(function(){soliloquy_edit={init:function(){SoliloquySlidesUpdate(),e("#soliloquy-settings-content").on("click.soliloquyModify",".soliloquy-modify-slide",function(t){t.preventDefault();var i=e(this).parent().data("soliloquy-slide");SoliloquyModalWindow.content(new SoliloquyView({collection:SoliloquySlides,child_views:SoliloquyChildViews,attachment_id:i})),SoliloquyModalWindow.open(),e(document).trigger("soliloquyEditOpen"),e(".CodeMirror").each(function(e,t){t.CodeMirror.refresh()})})}},soliloquy_edit.init()}),e(document).on("soliloquyUploaded",function(){soliloquy_edit.init()})}(jQuery);var SoliloquyBulkEditImageView=wp.Backbone.View.extend({tagName:"li",className:"attachment",template:wp.template("soliloquy-meta-bulk-editor-slides"),initialize:function(e){this.model=e.model},render:function(){return this.$el.html(this.template(this.model.attributes)),this}}),SoliloquyBulkEditView=wp.Backbone.View.extend({id:"soliloquy-meta-edit-bulk",tagName:"div",className:"edit-attachment-frame mode-select hide-menu hide-router",template:wp.template("soliloquy-meta-bulk-editor"),events:{"keyup input":"updateItem","keyup textarea":"updateItem","change input":"updateItem","change textarea":"updateItem","blur textarea":"updateItem","change select":"updateItem","click .actions a.soliloquy-meta-submit":"saveItem","keyup input#link-search":"searchLinks","click div.query-results li":"insertLink","click button.media-file":"insertMediaFileLink","click button.attachment-page":"insertAttachmentPageLink"},initialize:function(e){this.on("loading",this.loading,this),this.on("loaded",this.loaded,this),this.is_loading=!1,this.collection=e.collection,this.child_views=e.child_views,this.model=new SoliloquySlide},render:function(){return this.$el.html(this.template(this.model.toJSON())),this.collection.forEach(function(e){var t=new SoliloquyBulkEditImageView({model:e});this.$el.find("ul.attachments").append(t.render().el)},this),this.child_views.length>0&&this.child_views.forEach(function(e){var t=new e({model:this.model});this.$el.find("div.addons").append(t.render().el)},this),this.$el.find("textarea[name=caption]").val(this.model.get("caption")),setTimeout(function(){quicktags({id:"caption",buttons:"strong,em,link,ul,ol,li,close"}),QTags._buttonsInit()},100),wpLink.init,this},renderError:function(e){var t={},i;return t.error=e,new wp.media.view.SoliloquyError({model:t}).render().el},loading:function(){this.is_loading=!0,this.$el.find(".spinner").css("visibility","visible")},loaded:function(e){this.is_loading=!1,this.$el.find(".spinner").css("visibility","hidden"),void 0!==e&&this.$el.find("ul.attachments").before(this.renderError(e))},updateItem:function(e){""!=e.target.name&&("checkbox"==e.target.type?value=e.target.checked?1:0:value=e.target.value,this.model.set(e.target.name,value))},saveItem:function(){this.trigger("loading");var e=[];this.collection.forEach(function(t){e.push(t.id)},this),wp.media.ajax("soliloquy_bulk_save_meta",{context:this,data:{nonce:soliloquy_metabox_local.save_nonce,post_id:soliloquy_metabox_local.id,meta:this.model.attributes,image_ids:e},success:function(e){this.collection.forEach(function(e){for(var t in this.model.attributes)value=this.model.attributes[t],value.length>0&&e.set(t,value);var i=JSON.stringify(e.attributes);jQuery("ul#soliloquy li#"+e.get("id")).attr("data-solioquy-image-model",i),jQuery("ul#soliloquy li#"+e.get("id")+" div.title").text(e.get("title"))},this),this.trigger("loaded loaded:success"),SoliloquyModalWindow.close()},error:function(e){this.trigger("loaded loaded:error",e)}})},insertMediaFileLink:function(e){this.trigger("loading"),this.model.set("link",response.media_link),this.trigger("loaded loaded:success"),this.render()},insertAttachmentPageLink:function(e){this.trigger("loading"),this.model.set("link",response.media_link),this.trigger("loaded loaded:success"),this.render()}});jQuery(document).ready(function(e){e("#soliloquy-settings-content").on("click","a.soliloquy-slides-edit",function(e){e.preventDefault(),SoliloquySlidesUpdate(!0),SoliloquyModalWindow.content(new SoliloquyBulkEditView({collection:SoliloquySlides,child_views:SoliloquyChildViews})),SoliloquyModalWindow.open()})}),jQuery(document).ready(function(e){e("a.soliloquy-slides-delete").click(function(t){var i;if(t.preventDefault(),!confirm(soliloquy_metabox_local.remove_multiple))return!1;var l=[];e("ul#soliloquy-output > li.selected").each(function(){l.push(e(this).attr("id"))});var o={action:"soliloquy_remove_slides",attachment_ids:l,post_id:soliloquy_metabox_local.id,nonce:soliloquy_metabox_local.remove_nonce};e.post(soliloquy_metabox_local.ajax,o,function(t){e("ul#soliloquy-output > li.selected").remove(),e(".soliloquy-bulk-actions").fadeOut(),e(".soliloquy-select-all").prop("checked",!1),e(".soliloquy-load-library").attr("data-soliloquy-offset",0).addClass("has-search").trigger("click"),SoliloquySlidesUpdate(!1);var i=e("#soliloquy-output li").length;e(".soliloquy-count").text(i.toString()),0===i&&(e(".soliloquy-bulk-actions").fadeOut(),e(".soliloquy-slide-header").fadeOut().addClass("soliloquy-hidden"),e("#soliloquy-empty-slider").removeClass("soliloquy-hidden").fadeIn())},"json")}),e("#soliloquy-settings-content ").on("click",".soliloquy-remove-slide",function(t){var i;if(t.preventDefault(),confirm(soliloquy_metabox_local.remove)){var l=e(this).parent().attr("id"),o={action:"soliloquy_remove_slide",attachment_id:l,post_id:soliloquy_metabox_local.id,nonce:soliloquy_metabox_local.remove_nonce};e.post(soliloquy_metabox_local.ajax,o,function(t){e("#"+l).fadeOut("normal",function(){e(this).remove(),e(".soliloquy-load-library").attr("data-soliloquy-offset",0).addClass("has-search").trigger("click"),SoliloquySlidesUpdate(!1);var t=e("#soliloquy-output li").length;e(".soliloquy-count").text(t.toString()),0===t&&(e(".soliloquy-bulk-actions").fadeOut(),e(".soliloquy-slide-header").fadeOut().addClass("soliloquy-hidden"),e("#soliloquy-empty-slider").removeClass("soliloquy-hidden").fadeIn())})},"json")}})}),function(e,t,i){"use strict";var l=t.location.hash,o=t.location.hash.replace("!","");if(l&&l.indexOf("soliloquy-tab")>=0){var a=e(o.replace("tab_","")),s=a.parent(),n=a.parent().parent().find("ul.soliloquy-tabs-nav"),d=e("#post").attr("action");s.find(".soliloquy-tab-active").removeClass("soliloquy-tab-active"),a.addClass("soliloquy-tab-active"),n.find(".soliloquy-tab-nav-active").removeClass("soliloquy-tab-nav-active"),n.find('a[href="'+o.replace("tab_","")+'"]').parent().addClass("soliloquy-tab-nav-active"),d&&(d=d.split("#")[0],e("#post").attr("action",d+t.location.hash)),e("body").trigger("SoliloquyTabChange")}e(function(){e("[data-soliloquy-tab]").on("click",function(i){i.preventDefault();var l=e(this),o=l.attr("data-tab-id"),a=l.parent(),s=a.parent(),n=a.attr("data-update-hashbang"),d=void 0!==l.attr("href")?"tab_"+l.attr("href"):"tab_"+o;if(!l.hasClass("soliloquy-tab-nav-active")){if(s.find(".soliloquy-tab-active").removeClass("soliloquy-tab-active"),a.find(".soliloquy-tab-nav-active").removeClass("soliloquy-tab-nav-active"),l.addClass("soliloquy-tab-nav-active"),e("#"+o).addClass("soliloquy-tab-active"),l.trigger("SoliloquyTabChange"),"soliloquy-native"===o&&!0!==e("#soliloquy-type-default").prop("checked")&&(e("#soliloquy-types-nav li").removeClass("soliloquy-active"),e("#soliloquy-type-default").prop("checked",!0).trigger("change")),"1"===n){t.location.hash=d.split("#").join("#!");var u=e("#post").attr("action");u&&(u=u.split("#")[0],e("#post").attr("action",u+t.location.hash))}return!1}})})}(jQuery,window,document);