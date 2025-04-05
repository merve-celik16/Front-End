import { useState } from 'react'; // React'ın useState hook'unu import ediyoruz. Bu hook, bileşenler içinde state (durum) yönetimi için kullanılır.

function App() {
    const [notes, setNotes] = useState([ // Notları saklamak için bir state değişkeni (notes) ve bu değişkeni güncellemek için bir fonksiyon (setNotes) oluşturuyoruz. Başlangıçta, önceden tanımlanmış notları içeren bir dizi ile başlatıyoruz.
        { id: 1, text: 'Note 1', color: 'yellow' },
        { id: 2, text: 'Note 2', color: 'lightblue' },
        { id: 3, text: 'Note 3', color: 'lightgreen' },
    ]);

    const [note, setNote] = useState(''); // Yeni notun metnini saklamak için bir state değişkeni (note) ve bu değişkeni güncellemek için bir fonksiyon (setNote) oluşturuyoruz. Başlangıçta boş bir string ile başlatıyoruz.
    const [color, setColor] = useState('white'); // Not rengini saklamak için bir state değişkeni (color) ve bu değişkeni güncellemek için bir fonksiyon (setColor) oluşturuyoruz. Başlangıçta beyaz rengi ile başlatıyoruz.
    const [filter, setFilter] = useState(''); // Notları filtrelemek için kullanılan arama metnini saklamak için bir state değişkeni (filter) ve bu değişkeni güncellemek için bir fonksiyon (setFilter) oluşturuyoruz. Başlangıçta boş bir string ile başlatıyoruz.

    const colorOptions = ['palevioletred', 'gold', 'mediumpurple', 'lightseagreen', 'lightgreen']; // Renk seçeneklerini içeren bir dizi tanımlıyoruz.

    const addNote = () => { // Yeni not ekleme işlevini gerçekleştiren bir fonksiyon tanımlıyoruz.
        if (note) { // Eğer not metni boş değilse...
            setNotes([...notes, { id: Date.now(), text: note, color }]); // Yeni notu notlar dizisine ekliyoruz.
            setNote(''); // Not metni alanını temizliyoruz.
            setColor('white'); // Renk seçimi alanını varsayılan renge (beyaz) sıfırlıyoruz.
        }
    };

    const filteredNotes = notes.filter((n) => // Notları filtreleme işlevini gerçekleştiren bir fonksiyon tanımlıyoruz.
        n.text.toLowerCase().includes(filter.toLowerCase()) // Not metninin arama metnini içerip içermediğini kontrol ediyoruz (büyük/küçük harf duyarsız).
    );

    return ( // Bileşenin JSX yapısını döndürüyoruz.
        <div className="notes-app"> {/* Ana not uygulaması konteyneri. */}
            <h1> 🌸 NotesApp 🌸 </h1> {/* Not uygulamasının başlığı (çiçek emojileriyle). */}
            <div className="search-bar"> {/* Arama çubuğu konteyneri. */}
                <input // Arama çubuğu input alanı.
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)} // Arama metni değiştiğinde state'i güncelliyoruz.
                    placeholder="Search..."
                />
            </div>
            <div className="new-note"> {/* Yeni not giriş alanı konteyneri. */}
                <textarea // Not metni giriş alanı.
                    value={note}
                    onChange={(e) => setNote(e.target.value)} // Not metni değiştiğinde state'i güncelliyoruz.
                    placeholder="Enter your note here..."
                />
                <div className="color-picker"> {/* Renk seçici konteyneri. */}
                    {colorOptions.map((c, index) => ( // Renk seçeneklerini döngü ile oluşturuyoruz.
                        <div // Renk seçeneği div'i.
                            key={index}
                            className="color-option"
                            style={{ backgroundColor: c }} // Arka plan rengini seçilen renge ayarlıyoruz.
                            onClick={() => setColor(c)} // Renk seçildiğinde state'i güncelliyoruz.
                        />
                    ))}
                    <div className="selected-color" style={{ backgroundColor: color }}></div> {/* Seçilen rengi gösteren div. */}
                </div>
                <button onClick={addNote}>ADD</button> {/* Not ekleme butonu. */}
            </div>
            <div className="notes"> {/* Not listesi konteyneri. */}
                {filteredNotes.map((n) => ( // Filtrelenmiş notları döngü ile oluşturuyoruz.
                    <div // Not div'i.
                        key={n.id}
                        className="note"
                        style={{ backgroundColor: n.color }} // Arka plan rengini notun rengine ayarlıyoruz.
                    >
                        {n.text} {/* Not metni. */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App; // Bileşeni dışa aktarıyoruz.