import Buffer from '../src/classes/Buffer';

const testBuffer = new Buffer();

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3"
];
const ids = [];
urls.forEach((url,k)=>{
  ids.push([testBuffer.add(url),k]);
});

describe('Tests Buffer class with list \n'+ids.map(item => item[1]+" : "+item[0]+"\n").join(''), ()=>{
  describe('Test Buffer list', () => {
    test('Check list length ('+ids.length+')', () => {
      expect(testBuffer.size).toEqual(3);
    });
    test.each(ids)(
      "ids[%#] is a number",(id)=>{
        expect(typeof id).toEqual('number');
      }
    );
  });
  describe('Test Buffer functions', () => {
    describe('findByID', () => {
      test.each(ids)(
        "findByID(ids[%#]) return valid object",(id,k)=>{
          expect(testBuffer.findByID(id)).toEqual({id:id,url:urls[k]});
        }
      );
      test("findByID(1) return null",() => {
        expect(testBuffer.findByID(1)).toEqual(null);
      });
    });
    describe('findByUrl', () => {
      test.each(ids)(
        "findByUrl(ids[%#]) return valid object",(id,k)=>{
          expect(testBuffer.findByUrl(urls[k])).toEqual({id : id,url : urls[k]});
        }
      );
      test("findByUrl(http://google.com) return null",() => {
        expect(testBuffer.findByUrl("http://google.com")).toEqual(null);
      });
    });
    describe('update', () => {
      test("update(ids[1],http://google.com) return true and is updated",() => {
        expect(testBuffer.update(ids[1][0],"http://google.com")).toEqual(true);
        expect(testBuffer.list[1].url).toEqual("http://google.com");
      });
    });
    describe('remove', () => {
      test("remove(ids[1]) return true and is removed",() => {
        expect(testBuffer.remove(ids[1][0])).toEqual(true);
        expect(testBuffer.findByID(ids[1][0])).toEqual(null);
        expect(testBuffer.list[2]).toBeUndefined();
      });
    });
  });
});
