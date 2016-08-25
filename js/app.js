var vim__markup = document.querySelector('.pane__code--markup');
var vim__styles = document.querySelector('.pane__code--styles');
var markup = `
<h1 class="page-title [ u-fz:1.75r ]">Gallery</h1>

<section class="gallery [ u-d:fx ]">
<div class="gallery__photo [ u-bgc:$white ]">
</div>
</section>

<section class="notification [ u-mt:2r@l ]">
</section>`;

var styles = `
.u-fz\\:1\\.75r { font-size: 1.75rem; }
.u-d\\:fx { display: flex; }
.u-bgc\\:\\$white { background-color: $white; }

@media (min-width: breakpoint(large)) {
    .u-mt\\:2\\@l { margin-top: 2rem; }
}
`;

markup = markup
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"(.+)\[(.+:)(.+)\]"/g, '"<span class="highlight [ a-c:$white ]">$1[</span><span class="highlight [ a-c:$pink u-fw:700 ]">$2</span><span class="highlight [ a-c:$cyan u-fw:700 ]">$3</span><span class="highlight [ a-c:$white ]">]</span>"');

styles = styles
    .replace(/.(.+){ (.+) }/g, '<span class="[ a-c:$pink u-fw:700 ]">$1</span> { <span class="[ a-c:$cyan u-fw:700 ]">$2</span> }');

vim__markup.innerHTML = markup;
vim__styles.innerHTML = styles;
