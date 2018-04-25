import uuid from 'uuid';

export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
};

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
};

function deleteComment(id) {
	return {
		type: REMOVE_COMMENT,
		id: id
	}
};

function thumbUpComment (id) {
	return {
		type: THUMB_UP_COMMENT,
		id: id
	}
};

function thumbDownComment (id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id
	}
};


export default addComment;