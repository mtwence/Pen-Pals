import Card from "../../assets/letter_card.png";

const Letter = () => {
  return (
    <div class="row">
      <div class="row">
        <img
          class="col card-img-top"
          className="envelope"
          src={Card}
          alt="Card img"
        />
        <img
          class="col card-img-top"
          className="envelope"
          src={Card}
          alt="Card img"
        />
      </div>

      <div class="row">
        <img
          class="col card-img-top"
          className="envelope"
          src={Card}
          alt="Card img"
        />
        <img
          class="col card-img-top"
          className="envelope"
          src={Card}
          alt="Card img"
        />
      </div>
      <form action="/action_page.php">
        <p>
          <label for="letter">Write a Letter:</label>
        </p>
        <textarea id="letter" name="letter" rows="10" cols="100">
          How's your day? How are you feeling? What are your concerns?
        </textarea>
        <button type="submit" class="btn btn-primary btn-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default Letter;
