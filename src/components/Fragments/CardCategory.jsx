import Card from 'react-bootstrap/Card';

const CardCategory = () => {
  return (
    <div className="d-flex w-100 mt-4">
      <Card className='shadow'>
        <Card.Body>
          <Card.Title><h3 className='font-weight-bold'>Kategori Pilihan</h3></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCategory;
