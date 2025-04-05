import { useState } from 'react'; // React'in useState hook'unu içeri aktarıyoruz
import products from './data.json'; // JSON dosyamızdan ürünleri alıyoruz

function App() {
  // Başlangıç bakiyesini 100 milyar dolar olarak belirtiyoruz
  const [balance, setBalance] = useState(100000000000);
  
  // Kullanıcının satın aldığı ürün miktarlarını saklamak için bir state tanımlıyoruz
  const [quantities, setQuantities] = useState({});
  
  // Toplam harcama miktarını takip etmek için bir state oluşturuyoruz
  const [totalSpent, setTotalSpent] = useState(0);

  // Ürün satın alma fonksiyonu
  const handleBuy = (product) => {
    if (balance >= product.price) { // Eğer bakiye yeterliyse
      setBalance(prevBalance => prevBalance - product.price); // Bakiyeyi düşür
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [product.id]: (prevQuantities[product.id] || 0) + 1, // Ürünün miktarını artır
      }));
      setTotalSpent(prevTotal => prevTotal + product.price); // Toplam harcamayı güncelle
    } else {
      alert('Yeterli bakiyeniz yok!'); // Bakiye yetersizse uyarı ver
    }
  };

  // Ürün satma fonksiyonu
  const handleSell = (product) => {
    if (quantities[product.id] > 0) { // Eğer en az 1 tane alınmışsa
      setBalance(prevBalance => prevBalance + product.price); // Bakiyeyi artır
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [product.id]: prevQuantities[product.id] - 1, // Ürünün miktarını azalt
      }));
      setTotalSpent(prevTotal => prevTotal - product.price); // Toplam harcamayı güncelle
    } else {
      alert('Bu üründen hiç almadınız!'); // Eğer hiç alınmamışsa uyarı ver
    }
  };

  return (
    <div>
      {/* Bill Gates'in resmi */}
      <img src="/images/billgates.jpg" alt="billgates" className='bill' />
      
      {/* Sayfa başlığı */}
      <h1>Spend Bill Gates' Money</h1>
      
      {/* Güncel bakiyeyi gösteren alan */}
      <h2 className='balance'>Current Balance: ${balance.toLocaleString()}</h2>

      {/* Ürün kartlarını içeren konteyner */}
      <div className='product-container'>
        {products.map((product) => (
          <div className="product-card" key={product.id}> {/* Her ürün için kart oluştur */}
            {/* Ürün resmi */}
            <img src={product.img} alt={product.name} />
            
            {/* Ürün adı */}
            <h3>{product.name}</h3>
            
            {/* Ürün fiyatı */}
            <p>Price: ${product.price.toLocaleString()}</p>
            
            {/* Kullanıcının satın aldığı miktar */}
            <p>Quantity: {quantities[product.id] || 0}</p>

            {/* Al ve sat butonlarını içeren grup */}
            <div className="button-group">
              <button onClick={() => handleSell(product)} disabled={!quantities[product.id]}>Sell</button>
              <input type="number" value={quantities[product.id] || 0} readOnly />
              <button onClick={() => handleBuy(product)} disabled={balance < product.price}>Buy</button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Satın alınan ürünlerin listesi (Fiş) */}
      <div className='purchased'>
        <h2>Your Receipt:</h2>
        <ul>
          {Object.keys(quantities).map(productId => {
            const quantity = quantities[productId];
            if (quantity > 0) { // Eğer ürün alınmışsa listele
              const product = products.find(p => p.id === parseInt(productId));
              return (
                <li key={productId}>
                  {product.name} x {quantity} - ${product.price * quantity}
                </li>
              );
            }
            return null;
          })}
        </ul>
        <hr />
        {/* Toplam harcama miktarı */}
        <h2 style={{ color: 'darkblue' }}>Total Spent: ${totalSpent.toLocaleString()}</h2>
      </div>
    </div>
  );
}

export default App;
