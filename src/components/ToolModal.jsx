const ToolModal = ({ tool, onClose }) => {
  if (!tool) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>
          {tool.name.first} {tool.name.last}
        </h2>

        <p><strong>Category:</strong> {tool.species}</p>

        <p>
          This is a demo detail popup showing how a real AI tool
          description would appear inside a modal component.
        </p>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
};

export default ToolModal;