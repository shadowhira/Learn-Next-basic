const SubmitForm = () => {
  const updateData = async (data) => {
    "use server";
    // update data logic
  };

  return (
    <div className="bg-[#f00]">
      <form action={updateData}>
        <div>Submit form?</div>
        <input type="text" name="input" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitForm;
