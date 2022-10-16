import Container from "react-bootstrap/Container";


const Header = () => {
     
  return (
    
    <Container className="block-example border border-danger border-4 rounded-5 mb-5 bg-light" >
       <Container className="text-justify">
        <h1 className="text-danger fs-1">Palindromic and Perfect Numbers</h1>
      </Container>
     <p className="mx-3">
      <span className='text-primary '>Palindromik sayılar nedir?</span> <br />

Palindromik sayı (sayısal palindrom veya sayısal palindrom olarak da bilinir), rakamları tersine çevrildiğinde aynı kalan bir sayıdır (16461 gibi). Başka bir deyişle, dikey bir eksen boyunca yansıma simetrisine sahiptir. Palindromik terimi, harfleri tersine çevrildiğinde yazımı değişmeyen bir kelimeyi (rotor veya yarış arabası gibi) ifade eden palindromdan türetilmiştir.
İlk 30 palindromik sayı (ondalık olarak) şunlardır:

0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 202,</p> 

<p className="mx-3">
<span className='text-primary'>Mükemmel sayılar nedir?</span> <br />

Mükemmel Sayı: Sayılar teorisinde, mükemmel sayı, sayının kendisi hariç, pozitif bölenlerinin toplamına eşit olan pozitif bir tamsayıdır. Örneğin, 6'nın 1, 2 ve 3 bölenleri vardır ve 1 + 2 + 3 = 6, yani 6 mükemmel bir sayıdır.
</p>
    </Container>
  )
}

export default Header;