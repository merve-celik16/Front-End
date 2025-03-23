import { useState, useEffect } from 'react'; // React'in useState ve useEffect Hook'larını import ediyoruz.
import './App.css'; // CSS dosyasını içe aktarıyoruz.
import dice1 from './images/dice1.png'; // Zar resimlerini import ediyoruz.
import dice2 from './images/dice2.png';
import dice3 from './images/dice3.png';
import dice4 from './images/dice4.png';
import dice5 from './images/dice5.png';
import dice6 from './images/dice6.png';

function App() { 
  // Zar resimlerini bir dizi içinde saklıyoruz.
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  // Oyuncu 1'in adını saklamak için bir state oluşturuyoruz.
  const [player1Name, setPlayer1Name] = useState('Merve');   
  // Zar resimlerini saklamak için state oluşturuyoruz.
  const [image, setNewImage] = useState(diceImages[0]);
  const [image2, setNewImage2] = useState(diceImages[1]);
  // Kazananı göstermek için bir state oluşturuyoruz.
  const [resultMessage, setResultMessage] = useState('');
  // Zar atma animasyonu için bir state tanımlıyoruz.
  const [rolling, setRolling] = useState(false);

  // Zar atma işlemi için fonksiyon tanımlıyoruz.
  const rollDice = () => {
    setRolling(true); // Animasyonu başlatıyoruz.
    let rollInterval = setInterval(() => {
      setNewImage(diceImages[Math.floor(Math.random() * 6)]);
      setNewImage2(diceImages[Math.floor(Math.random() * 6)]);
    }, 100);

    // 3 saniye sonra zarları durdurup sonucu belirliyoruz.
    setTimeout(() => {
      clearInterval(rollInterval);
      setRolling(false); // Animasyonu durduruyoruz.

      // Rastgele 0 ile 5 arasında bir sayı oluşturuyoruz.
      const randomNum1 = Math.floor(Math.random() * 6);
      const randomNum2 = Math.floor(Math.random() * 6);
      
      // Rastgele sayıya göre zar resmini değiştiriyoruz.
      setNewImage(diceImages[randomNum1]);
      setNewImage2(diceImages[randomNum2]);

      // Zarları karşılaştırarak sonucu belirliyoruz.
      if (randomNum1 > randomNum2) {
        setResultMessage(`${player1Name} wins! 😄`);
      } else if (randomNum1 < randomNum2) {
        setResultMessage(`Player 2  wins! 😢`);
      } else {
        setResultMessage(`Draw! 🤝`);
      }
    }, 3000);
  };

  return (   
    <div className='App'>
      <center>
        <h2>{resultMessage}</h2> {/* Sonucu ekranda göstermek için */}
        <div className='container'>
          <div className='dice-container'>
            {/* Oyuncu 1'in adını değiştirmek için bir input alanı */}
            <input 
              type="text" 
              placeholder="Enter Player 1's name" 
              value={player1Name} 
              onChange={(e) => setPlayer1Name(e.target.value)} 
              style={{ fontSize: '30px', marginBottom: '1rem' }}
            />
            {/* Oyuncu 1'in zarını gösteren resim */}
            <img className='square' src={image} alt="Dice" />
          </div>
          
          {/* İki zar arasında boşluk bırakmak için */}
          <div style={{ width: '40px', display: 'inline-block' }}></div>
          
          <div className='dice-container'>
            {/* Oyuncu 2 (PC) sabit isim */}
            <input 
              type="text" 
              value="Player 2 " 
              readOnly 
              style={{ fontSize: '30px', marginBottom: '2rem' }} 
            />
            {/* Oyuncu 2'nin zarını gösteren resim */}
            <img className='square' src={image2} alt="Dice" />
          </div>
        </div>
        
        {/* Zar atma butonu, animasyon sırasında devre dışı bırakılıyor */}
        <button 
          type="button" 
          className="btn btn-success w-50" 
          style={{ color: 'white' }} 
          onClick={rollDice}
          disabled={rolling} 
        >
          {rolling ? "Rolling..." : "Roll Dice"} {/* Buton animasyon durumuna göre güncelleniyor */}
        </button>
      </center>
    </div> 
  );
}

export default App;
