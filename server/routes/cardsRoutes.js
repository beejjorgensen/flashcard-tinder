
// create calls to cards db
app.post('/cards', (req, res) => {
  const { _id, frontCard, backCard } = req.body;
  const card = new Card({_id, frontCard, backCard});
  card.save((err, newCard) => {
    if (err) return res.send(err);
    res.json(newCard)
  });
});

app.get('/cards', (req, res) => {
  console.log('Hello from app.get /cards route!');
  Card.find({}, (err, card) => {
    console.log("Cards Array", card);
    if (err) return res.send(err);
    res.send(card);
  });
});

