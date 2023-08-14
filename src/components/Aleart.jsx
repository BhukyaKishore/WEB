import React from "react";

export default function Aleart() {
  return (
    <>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Successfully feedback submited</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}
