jQuery('a[href*="redgif"]').attr('target','_blank').append('<div class="tag redgifAlert">REDGIF</div>');
jQuery('a[href*="pornhub"]').attr('target','_blank').append('<div class="tag phAlert">PORNHUB</div>');
jQuery('a[href*="erome"]').attr('target','_blank').append('<div class="tag emAlert">EROME</div>');
jQuery('a[data-href-url*="reddit.com/gallery"]').attr('target','_blank').append('<div class="tag riAlert">REDDIT GALLERY</div>');
jQuery(window).on('hashchange', function() {
    jQuery('.tag').remove();
    jQuery('a[href*="redgif"]').attr('target','_blank').append('<div class="tag redgifAlert">REDGIF</div>');
    jQuery('a[href*="pornhub"]').attr('target','_blank').append('<div class="tag phAlert">PORNHUB</div>');
    jQuery('a[href*="erome"]').attr('target','_blank').append('<div class="tag emAlert">EROME</div>');
    jQuery('a[data-href-url*="reddit.com/gallery"]').attr('target','_blank').append('<div class="tag riAlert">REDDIT GALLERY</div>');
});
