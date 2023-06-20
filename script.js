const products = document.querySelectorAll('.product');

    products.forEach(product => {
      product.addEventListener('mouseenter', () => {
        product.style.transform = 'scale(1.1)';
      });

      product.addEventListener('mouseleave', () => {
        product.style.transform = 'scale(1)';
      });
    });