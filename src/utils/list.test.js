import { describe, it, expect } from "vitest";
import { splitTodosIntoDays } from "./list";

describe('splitTodosIntoDays', () => {
    it('should split todos correctly by day', () => {
        const todos = [
            { id: 1, text: 'Task 1', day: 'må' },
            { id: 2, text: 'Task 2', day: 'ti' },
            { id: 3, text: 'Task 3', day: 'on' },
            { id: 4, text: 'Task 4', day: 'to' },
            { id: 5, text: 'Task 5', day: 'fr' },
        ];

        const expected = [
            [{ id: 1, text: 'Task 1', day: 'må' }],
            [{ id: 2, text: 'Task 2', day: 'ti' }],
            [{ id: 3, text: 'Task 3', day: 'on' }],
            [{ id: 4, text: 'Task 4', day: 'to' }],
            [{ id: 5, text: 'Task 5', day: 'fr' }],
            [],
            []
        ];

        const result = splitTodosIntoDays(todos);
        expect(result).toEqual(expected);
    });

    it('should return empty arrays for days with no todos', () => {
        const todos = [
            { id: 1, text: 'Task 1', day: 'må' },
        ];

        const expected = [
            [{ id: 1, text: 'Task 1', day: 'må' }],
            [],
            [],
            [],
            [],
            [],
            []
        ];

        const result = splitTodosIntoDays(todos);
        expect(result).toEqual(expected);
    });

    it('should handle an empty todo list', () => {
        const todos = [];

        const expected = [
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];

        const result = splitTodosIntoDays(todos);
        expect(result).toEqual(expected);
    });
});