import React from "react";
import { formatDistanceToNow } from "date-fns";

export default class Task extends React.Component {
  state = {
    isEditing: false,
    oldLabel: this.props.label,
    editedLabel: this.props.label,
    newLabel: "",
  };

  handleEdit = (event) => {
    this.setState({ isEditing: true });
  };

  onLabelChange = (e) => {
    if (e.key === "Escape") {
      this.setState({
        isEditing: false,
        editedLabel: this.state.oldLabel,
      });
    } else {
      this.setState({
        newLabel: e.target.value,
        editedLabel: e.target.value,
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemEdited(this.state.newLabel, this.props.id);
    this.setState({ isEditing: false });
  };

  render() {
    const { id, date, label, onDeleted, onToggleDone, done } = this.props;

    let classCondition = "";
    if (done) classCondition += "completed";
    const result = formatDistanceToNow(date, { addSuffix: true });

    if (!this.state.isEditing) {
      return (
        <li className={classCondition}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={onToggleDone}
              checked={done}
            />
            <label>
              <span className="description" onClick={onToggleDone}>
                {label}
              </span>
              <span className="created">created {result}</span>
            </label>

            <button
              className="icon icon-edit"
              onClick={this.handleEdit}
            ></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
          </div>
        </li>
      );
    } else
      return (
        <li className="editing">
          <form onSubmit={this.onSubmit}>
            <input
              onSubmit={this.onSubmit}
              type="text"
              className="edit"
              //placeholder={this.state.editedLabel}
              value={this.state.editedLabel}
              onChange={(e) => this.onLabelChange(e)}
              onKeyDown={this.onLabelChange}
            />
          </form>
        </li>
      );
  }
}

// Добавление функции редактирования в компонент Task:
// В компоненте Task добавьте состояние isEditing и editedLabel с помощью хука useState.
// Изначально установите isEditing в false и editedLabel в значение метки задачи из пропсов.
// Создайте функцию-обработчик handleEditClick, которая будет устанавливать состояние isEditing в true при клике на кнопку редактирования.

// В методе render компонента Task, используйте условный рендеринг для отображения поля ввода
// и метки задачи на основе значения isEditing.
// Если isEditing равно true, отображайте поле ввода, иначе отображайте метку задачи.

// Создайте функцию-обработчик handleInputChange,
// которая будет обновлять состояние editedLabel на основе измененного значения в поле ввода.

// Создайте функцию-обработчик handleSaveEdit, которая будет вызываться при сохранении редактирования задачи. В этой функции вызывайте соответствующую функцию-обработчик onEdit из пропсов и передайте идентификатор задачи и отредактированную метку задачи. Затем установите состояние isEditing в false.
// Обновление компонента TaskList и App:
// В компоненте TaskList передайте функцию-обработчик onEdit в компонент Task при отображении списка задач. Это позволит передавать обновленные метки задачи из компонента Task вверх по иерархии компонентов.
// В компоненте App создайте функцию handleEditTask, которая будет обновлять метку задачи в состоянии tasks при редактировании задачи. Для этого воспользуйтесь функцией map для обновления нужной задачи в массиве задач.
// Передайте функцию handleEditTask в компонент TaskList через пропс onEdit.
// Обновите компонент Task так, чтобы он вызывал функцию-обработчик onEdit при сохранении редактирования задачи.
// Тестирование:
// Убедитесь, что после внесения изменений вы можете редактировать метки задач в вашем приложении и сохранять изменения.
// Проверьте, что обновленные метки задач корректно отображаются в списке задач.
// Надеюсь, этот план поможет вам решить задачу! Если у вас возникнут дополнительные вопросы, пожалуйста, дайте мне знать.
