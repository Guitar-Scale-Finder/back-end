class Stack {
  constructor() {
    this.stack = [];
  }
  append(value) {
    this.stack.append(value);
  }
  pop() {
    this.size() > 0 ? this.stack.pop : null;
  }
  size() {
    return this.stack.length;
  }
}

class Graph {
  constructor() {
    this.vertices = {};
  }
  addVertex(id) {
    this.vertices[id] = new Set();
  }
  addEdge(v1, v2) {
    if (v1 in this.vertices && v2 in this.vertices) {
      this.vertices[v1].add(v2);
    } else {
      throw new Error("Vertex does not exist... 💩");
    }
  }
  getNeighbors(id) {
    return this.vertices[id];
  }
  findScale(root, scale) {
    const stack = [];
    stack.push();
    const notes = [];
  }
}

// class Graph:

//     def find_scale(self, root_note, scale):
//         s = Stack()
//         s.push(root_note)
//         notes_arr = []

//         while s.size() > 0:
//             cur_note = s.pop()

//             if cur_note not in notes_arr:
//                 notes_arr.append(cur_note)

//             for next_note in self.get_neighbors(cur_note):
//                 if next_note not in notes_arr:
//                     s.push(next_note)

//         if scale == "Ionian":
//             result = []
//             shape = [0, 2, 4, 5, 7, 9, 11]
//             for key, note in enumerate(notes_arr):
//                 if key in shape:
//                     result.append(note)
//             print(result)
//         elif scale == "Dorian":
//             result = []
//             shape = [0, 2, 3, 5, 7, 9, 10]
//             for key, note in enumerate(notes_arr):
//                 if key in shape:
//                     result.append(note)
//             print(result)

//         elif scale == "Phrygian":
//             result = []
//             shape = [0, 1, 3, 5, 7, 8, 10]
//             for key, note in enumerate(notes_arr):
//                 if key in shape:
//                     result.append(note)
//             print(result)

//         elif scale == "Lydian":
//             result = []
//             shape = [0, 2, 4, 6, 7, 9, 11]
//             for key, note in enumerate(notes_arr):
//                 if key in shape:
//                     result.append(note)
//             print(result)

//         elif scale == "Mixolydian":
//             result = []
//             shape = [0, 2, 4, 5, 7, 9, 10]
//             for key, note in enumerate(notes_arr):
//                 if key in shape:
//                     result.append(note)
//             print(result)

//         elif scale == "Aeolian":
//             result = []
//             shape = [0, 2, 3, 5, 7, 8, 10]
//             for key, note in enumerate(notes_arr):
//                 if key in shape:
//                     result.append(note)
//             print(result)

//         elif scale == "Locrian":
//             result = []
//             shape = [0, 1, 3, 5, 6, 8, 10]
//             for key, note in enumerate(notes_arr):
//                 if key in shape:
//                     result.append(note)
//             print(result)
