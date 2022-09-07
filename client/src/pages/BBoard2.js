import React, { useState, useEffect } from "react";
import Card from "../assets/letter_card.png";

const BBoard = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default BBoard;
