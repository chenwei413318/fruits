<template>
	<div class="cart-empty">
		<img src="../content/images/main/cart_empty-172251d77c.png"/>
		<p>还没找到心仪的商品吗？</p>
		<a href="">去逛逛吧</a>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.cart-empty
	{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #fff;
    text-align: center;
	    img{
	    	    margin: 1.5rem auto 0;
	    width: 2.25rem;
	    }
	    p{
	    	display: block;
	    	padding: .15rem 0;
		    font-size: .15rem;
		    color: #3a3a3a;
	    }
	    a{
	    	    font-size: .16rem;
    			color: #f93;
	    }
	}
</style>