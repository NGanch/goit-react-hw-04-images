import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FiSearch } from 'react-icons/fi';
import {
  Header,
  FormBtn,
  InputSearch,
  SearchFormStyled,
} from './Searchbar.slyled';
//=====================================================
export function Searchbar ({onSubmit}){
    const [searchName, setSearchName] = useState('');

  const handleSearch = evt => {
    setSearchName(evt.currentTarget.value.toLowerCase());

  };
  //---- Опрацювання форми -----

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchName.trim() === '') {
      toast('🦄 Type a name of picture.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      // alert('send name');
      return;
    }
    //Виклик функції  Submit
    onSubmit(searchName);
    // Очишення
    setSearchName('');
    // console.log(this.state)

  };
    return (
      <Header>
        <SearchFormStyled onSubmit={handleSubmit}>
          <InputSearch
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchName}
            onChange={handleSearch}
          />
          <FormBtn type="submit">
            <FiSearch fontSize="1.5em" />
          </FormBtn>
        </SearchFormStyled>
      </Header>
    );
  }

