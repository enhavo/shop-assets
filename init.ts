import * as $ from "jquery";
import '@enhavo/shop/assets/styles/block.scss';
import '@enhavo/shop/assets/styles/shop.scss';
import Cart from "@enhavo/shop/Cart/Cart";

$(() => {
    (new Cart).init(document.body);
});
